export interface CareerTask {
  service: string;
  descriptions: string[];
}

export interface Career {
  company: string;
  startDate: string;
  endDate: string | null;
  isGoing: boolean;
  tasks: CareerTask[];
}
