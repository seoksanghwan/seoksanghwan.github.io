let calendarId = document.getElementById('CalendarTodo');  
let Calendar = calendarId.querySelector('.Calendar');  
let today = new Date();
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let dayWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let monthString = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let datedataId = '0'+today.getFullYear() + '0' + (today.getMonth()+1) + '0' + today.getDate();//KEY
let todosection = document.querySelector('.Todo');
let todolist = document.querySelector('.list-group');
let inputElement = document.querySelector('.newTodo');
let indexToCheck = document.querySelector('.edit');
let footer = document.querySelector('.fillter')
let Enter = 13;

function getTodoListData () {
  return JSON.parse(localStorage.getItem(datedataId) || "[]");
};

function setTodoListData (list) {
  return localStorage.setItem(datedataId, JSON.stringify(list));
};

function setAttributes (element,attrs) {
  for(let i in attrs){
    element.setAttribute(i,attrs[i]);
  }
}

(function buildCalendarTable (){ 
  let createTable = document.createElement('table');
  createTable.className = 'mainTable';  
  
  let createTr = document.createElement('tr');
  createTr.className = 'mainTr';

  let bigNumber = document.createElement('div');
  bigNumber.className = 'bigNumber';  

  let createCalendar = document.createElement('table');
  createCalendar.className = 'createCalendar';  

  let weekSection = document.createElement('thead');
  weekSection.className = 'weeksection';  

  let daySection = document.createElement('tbody');
  daySection.className = 'daysection';    

  let prevButton = document.createElement('button');
  prevButton.className = 'PrevBtn';
  prevButton.innerText =  "\u25c0";

  let nextButton = document.createElement('button');
  nextButton.className = 'NextBtn';
  nextButton.innerText = "\u25b6";

  Calendar.appendChild(createTable);

  createTable.appendChild(createTr);
  for (let i = 0; i < 2; i++) {
    let createTd = document.createElement('td');
    createTd.className = 'mainTd';
    createTr.appendChild(createTd);
  };
  
  createTr.children[0].appendChild(bigNumber);
  createTr.children[1].appendChild(prevButton);
  createTr.children[1].appendChild(nextButton)
  createTr.children[1].appendChild(createCalendar);
  createCalendar.appendChild(weekSection);
  createCalendar.appendChild(daySection);
})();  

function buildCalendar () {
  let doMonth = new Date(today.getFullYear(),today.getMonth(),1);
  let lastDay = new Date(today.getFullYear(),today.getMonth()+1,0);
  let weekSection = document.querySelector('.weeksection');
  let daySection = document.querySelector('.daysection');
  let bigNumber = document.querySelector('.bigNumber');
  let weekTrTag = document.createElement('tr');  

  weekSection.innerHTML = "<tr><th colspan='7'>"+"<h1 id='tbCalendarYM'>"+(monthString[today.getMonth()])+" "+(today.getFullYear())+"</h1>"+"</th></tr>";
  for(let idx = 0; idx < 7; idx++){
    weekTrTag.innerHTML += '<td class='+dayWeek[idx]+'>'+dayWeek[idx]+'</td>'
    weekSection.appendChild(weekTrTag);
  };

  for (let idx = daySection.rows.length; idx > 0; idx--) {
    daySection.deleteRow(daySection.rows.length-1);
  }

  let row = null;
  row = daySection.insertRow();

  let count = 0;

  for(let idx = 0; idx < doMonth.getDay(); idx++){
    cell = row.insertCell();    
    count = count + 1;
  };

  for(let idx = 1; idx <= lastDay.getDate(); idx++){
    let todayString = new Date(year,month,idx).getDay();
    cell = row.insertCell(); 
    cell.innerHTML = idx ;      
    count = count + 1;
    cell.className  = "day";   
    cell.dataset.day  = idx;   
    if (count % 7 == 1) {          
      cell.innerHTML = idx;
      cell.className = 'Sun'+' day';
    }    
    if (count%7 == 0){
      cell.innerHTML = idx;
      cell.className = 'Sat'+' day';
      row = daySection.insertRow();
    }
    if (today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && idx == date.getDate()) {
      cell.className = 'active'+' day';
      if (count % 7 == 1) {  
        cell.className = 'active'+' Sun'+' day';
      }    
      if (count%7 == 0){
        cell.className = 'active'+' Sat'+' day';
      }
      bigNumber.innerHTML = "<p class='dayText'>"+dayWeek[todayString]+"</p>"+idx;             
    }       
    cell.id = '0'+ year + '0' + (month+1) + '0' + idx;
  };
}
buildCalendar();

let daySection = document.querySelector('.daysection');
let bigNumber = document.querySelector('.bigNumber');
let prevElement = document.querySelector('.PrevBtn');
let nextElement = document.querySelector('.NextBtn');

prevElement.addEventListener('click',function nextMonthEve (event) {
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());  
  month-=1;
  if (month < 1 ) { 
    month = 12;
    year -= 1;
  } 
  buildCalendar();
});

nextElement.addEventListener('click',function nextMonthEve (event) {
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  month+=1;
  if (month >= 12 ) { 
    month = 0;
    year += 1;
  } 
  buildCalendar();
});

daySection.addEventListener('click', function focusDay (event) {
  event.stopPropagation();
  let evpar = event.target;
  let expandedPanel = daySection.querySelector(".active");
  let numberDay = evpar.getAttribute('data-day');
  let targetStingDay = new Date(year,month,numberDay).getDay();
  datedataId = event.target.getAttribute('id');

  while (todolist.childElementCount > 0) {
    todolist.removeChild(todolist.lastElementChild);
    footer.style.display = 'none'
  }
  if (evpar.className) {
    bigNumber.innerHTML = "<p class='dayText'>"+dayWeek[targetStingDay]+"</p>"+ numberDay;
    if (expandedPanel) {
      expandedPanel.classList.remove('active');
    }
    evpar.classList.add("active"); 
  };

  readTasks();
});

function removeMe (event) {
  event.stopPropagation();
  let htmlListItem = this.parentNode.parentNode;
  let indexToDelete = htmlListItem.className;
  htmlListItem.remove();
  let list = getTodoListData();
  list.splice(indexToDelete, 1);
  if(htmlListItem === undefined){
    footer.style.display = 'none'
  }else{
    footer.style.display = 'block'
  }
  footer.style.display = 'none'
  setTodoListData(list);
}

function checkMe (event) {
  event.stopPropagation();
  let indexToCheck = this.parentNode.parentNode.className;
  let list = getTodoListData();
  list[indexToCheck].checked = this.checked;
  setTodoListData(list);
}

function editMe (event) {
  event.stopPropagation();
  let evpar = event.target;
  let html = event.target.innerHTML;
  let check = this.parentNode.className;
  let expandedPanel = todolist.querySelector(".active");
  let indexToCheck = this.parentNode.lastElementChild;
  if (expandedPanel) {
    expandedPanel.classList.remove('active');
  }
  indexToCheck.classList.add('active');
  indexToCheck.focus();
  indexToCheck.addEventListener('keypress', function (event) {
    if (event.which === Enter) {    
      
      let indexTo = evpar.innerHTML;
      
      let list = getTodoListData();
      
      evpar.innerHTML = this.value;

      if(!(list[check] === undefined )){
        list[check].body = this.value;
      }

      setTodoListData(list);    

      indexToCheck.classList.remove('active');
    }
  });
}

footer.addEventListener('click',function (event){
  event.stopPropagation();
  let list = getTodoListData();
  var evpar = event.target;
  var checktodo = document.querySelectorAll('input.toggle');
  let expandedPanel = footer.querySelector(".active");
  if (evpar.tagName === 'LI') {
    if (expandedPanel) {
      expandedPanel.classList.remove('active');
    }
    evpar.classList.add('active');
    if (evpar.getAttribute('data-name') === 'completed') {
      checktodo.forEach(function (check) {
        check.checked ? check.parentNode.parentNode.style.display='block' : check.parentNode.parentNode.style.display='none'
      })
    }else if (evpar.getAttribute('data-name') === 'active') {
      checktodo.forEach(function (check) {
        check.checked ? check.parentNode.parentNode.style.display='none' : check.parentNode.parentNode.style.display='block'
      })
    }else if (evpar.getAttribute('data-name') === 'all') {
      checktodo.forEach(function (check) {
        check.checked ? check.parentNode.parentNode.style.display='block' : check.parentNode.parentNode.style.display='block'
      })
    } 
  }
});

function addTodo (task, index) {

  let li = document.createElement('li');
  li.className = index;

  let div = document.createElement('div');
  div.className = 'view';

  let checktodo = document.createElement("input");
  checktodo.className = 'toggle';
  checktodo.type = "checkbox";
  checktodo.id = `checkbox-${index}`;
  checktodo.checked = task.checked? 'checked' : '' ; 


  let label = document.createElement('label');
  label.className = "content";
  label.innerText = task.body;

  let button = document.createElement('button');
  button.className = 'destroy';

  let edit = document.createElement('input');
  edit.className = 'edit';
  edit.value = task.body;
  let count = footer.querySelector('.count span');

  if (task.body == (task.which == 8)) {
    return false;
  } else {
    todolist.appendChild(li);
    li.appendChild(div);
    div.appendChild(checktodo);
    div.appendChild(label);
    div.appendChild(button);
    li.appendChild(edit);
    inputElement.value ='';
    footer.style.display = 'block'
  }

  button.addEventListener('click', removeMe);
  checktodo.addEventListener('change', checkMe);
  div.addEventListener('dblclick', editMe);
};

inputElement.addEventListener('keypress', function onCreateTodo (event) {
  if (event.which === Enter) {    
    event.stopPropagation();

    let list = getTodoListData();

    let newTask = {
      checked: false,
      body: inputElement.value
    };

    list.push(newTask);

    addTodo(newTask);

    setTodoListData(list);
  }
}); 

function readTasks(){
  todolist.innerHTML="";
  let todo = getTodoListData();
  if (!(todo === null)) {
    todo.forEach( function (task, index) {
      addTodo(task, index);
    });
  }
}

readTasks();


