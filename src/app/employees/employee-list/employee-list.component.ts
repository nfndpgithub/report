import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../epmloyee.model';
import { Chart } from 'chart.js';
import {
  ApexChart,
  ApexDataLabels,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { elementAt } from 'rxjs';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];

  chartSeries: ApexNonAxisChartSeries = [];
  chartLabels = [
    'Patrick Huthinson',
    'Abhay Singh',
    'Stewart Malachi',
    'John Black',

    'Mary Poppins',
    'Kavvay Verma',
    'Tim Perkinson',
    'Rita Alley',
    'Raju Sunuwar',
    'Tamoy Smith',
    ' ',
  ];
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true,
    },
  };

  constructor(private employeeService: EmployeeService) {
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getting();
    this.initializeChart();
  }
  //nije htelo da se  iz liste uzmu brojevi i imena pa sam rucno upisao  :///
  async initializeChart() {
    this.chartSeries = [208, 203, 202, 197, 166, 161, 161, 112, 97, 83, 30];
    //ne radi
    this.employeeList.forEach(async (element) => {
      await this.chartSeries.push(element.WorkingHours);
      await this.chartLabels.push(element.EmployeeName);
    });
  }
}
