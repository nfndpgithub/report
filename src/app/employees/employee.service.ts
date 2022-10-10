import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Employee } from './epmloyee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  e: Array<Employee> = [];
  employees: Array<Employee> = [];

  constructor() {}
  httpOpitons = {
    headers: new HttpHeaders({
      'Content-type': 'aplication/json',
    }),
  };

  getting() {
    fetch(
      'https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ=='
    )
      .then((data) => {
        return data.json();
      })
      .then((objectData) => {
        objectData.map(async (values: any) => {
          var index = this.employees.findIndex(
            (e) => e.EmployeeName === values.EmployeeName
          );

          index === -1
            ? await this.employees.push(
                new Employee(
                  values,
                  this.calculateDiff(values.StarTimeUtc, values.EndTimeUtc)
                )
              )
            : (this.employees[index].WorkingHours += this.calculateDiff(
                values.StarTimeUtc,
                values.EndTimeUtc
              ));
          this.employees.sort((a, b) => b.WorkingHours - a.WorkingHours);
        });
      });
    console.log(JSON.stringify(this.employees));
    return this.employees;
  }

  calculateDiff(start: Date, end: Date) {
    var startDate = new Date(start);
    var endDate = new Date(end);

    var diff =
      Date.UTC(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate(),
        endDate.getHours()
      ) -
      Date.UTC(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours()
      );

    return Math.floor((diff % 86400000) / 3600000);
  }
}
