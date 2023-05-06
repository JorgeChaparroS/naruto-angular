import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app/app.service';

@Component({
  selector: 'app-clans',
  templateUrl: './clans.component.html',
  styleUrls: ['./clans.component.scss']
})
export class ClansComponent implements OnInit {

  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.getClans();
  }

  getClans(): void {
    this.appService.getClans().subscribe({
      next: (response: any) => {
        console.log("Responseeee", response);
      },
      error: (error: any) => {
        console.log("Errorrrr", error);
      }
    });
  }
}
