import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  updateTime = 0;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAll().subscribe((data: any) => {
      this.updateTime = data.updated;
    });
  }
}
