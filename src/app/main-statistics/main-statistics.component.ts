import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.scss'],
})
export class MainStatisticsComponent implements OnInit {
  totalCases: number = 0;
  totalDeath: number = 0;
  totalRecovered: number = 0;
  updateTime = 0;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAll().subscribe((data: any) => {
      this.totalCases = data.cases;
      this.totalDeath = data.deaths;
      this.totalRecovered = data.recovered;
      this.updateTime = data.updated;
    });
  }
}
