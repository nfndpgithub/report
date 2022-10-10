import { Time } from '@angular/common';

export class Employee {
  public Id: string;
  public EmployeeName: string;
  public StarTimeUtc: Date;
  public EndTimeUtc: Date;
  public EntryNotes: string;
  public WorkingHours: number;
  public DeletedOn?: Time;
  constructor(data: any, workingHours: number) {
    this.Id = data.Id;
    this.EmployeeName = data.EmployeeName;
    this.StarTimeUtc = data.StarTimeUtc;
    this.EndTimeUtc = data.EndTimeUtc;
    this.EntryNotes = data.EntryNotes;
    this.DeletedOn = data.DeletedOn;
    this.WorkingHours = workingHours;
  }
}
