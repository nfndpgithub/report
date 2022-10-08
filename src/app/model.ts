export class Worker {
  id: string;
  name: string;
  workHours: number;

  constructor(id: string, name: string, workHours: number) {
    this.id = id;
    this.name = name;
    this.workHours = workHours;
  }
}
