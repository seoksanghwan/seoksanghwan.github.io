import { Career, CareerTask } from '@/types';
import { getDuration } from '@/lib/getDuration';

const introText =
  '"효율적인 시스템으로 팀의 생산성을 높이고, 기술로 서비스의 가치를 더하는 개발자"';

const aboutParagraphs = [
  '저는 명확한 책임과 의도가 담긴 설계를 지향합니다. 퍼블리셔 출신의 섬세한 UI 구현력에 프론트엔드 기술력을 더해, 디자이너와 개발자 모두가 만족하는 협업 구조를 만들어왔습니다.',
  '특히 디자인 시스템을 주도적으로 구축하여 컴포넌트 재사용률을 50%까지 끌어올렸으며, 이를 통해 개발 리소스를 절감하고 서비스의 일관성을 확보했습니다. 개인의 기술적 성장이 팀 전체의 시너지로 이어지는 선순환 구조를 만드는 데 집중합니다.',
];

function CareerTaskItem({ task }: { task: CareerTask }) {
  return (
    <li className="mb-[1.5rem]">
      <p className="text-[2rem] font-bold mb-[0.8rem] relative pl-[1.2rem] before:content-['•'] before:absolute before:left-[-5px]">
        {task.service}
      </p>
      <ul className="pl-[2.5rem] flex flex-col gap-[5px]">
        {task.descriptions.map((desc, dIdx) => (
          <li
            key={dIdx}
            className="text-[2rem] leading-[1.6] text-[#444] relative before:content-['◦'] before:absolute before:left-[-20px] before:text-[#888] break-keep"
          >
            {desc}
          </li>
        ))}
      </ul>
    </li>
  );
}

function CareerCard({ career }: { career: Career }) {
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <div>
        <div className="text-[2.4rem] font-bold text-[#111]">{career.company}</div>
        <div className="text-[1.5rem] text-[#555]">
          {career.startDate} ~{' '}
          {career.isGoing ? (
            <span className="text-[#00c471] font-semibold ml-1">재직 중</span>
          ) : (
            career.endDate
          )}
          <span className="text-[#666] ml-[8px]">
            ({getDuration(career.startDate, career.endDate, career.isGoing)})
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <ul className="list-none p-0">
          {career.tasks.map((task, tIdx) => (
            <CareerTaskItem key={tIdx} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export const AboutIntro = () => (
  <div className="flex flex-col gap-[10px] text-[2rem] leading-[1.6] text-[#18181c] break-keep">
    <p>
      <b>{introText}</b>
    </p>
    {aboutParagraphs.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </div>
);

type CareerSectionProps = {
  careers: Career[];
};

export const CareerSection = ({ careers }: CareerSectionProps) => (
  <div className="flex flex-col gap-[30px]">
    {careers.map((career, idx) => (
      <CareerCard key={idx} career={career} />
    ))}
  </div>
);
