import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app/app.service';
import { ClanType } from 'src/app/shared/utils/Constants';

@Component({
  selector: 'app-clans',
  templateUrl: './clans.component.html',
  styleUrls: ['./clans.component.scss']
})
export class ClansComponent implements OnInit {

  clans: ClanType[] | undefined;

  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.clans = this.appService.getClans();
    if (!this.clans || this.clans?.length < 1) {
      this.getClans();
    }
  }

  getClans(): void {
    this.appService.getClansFromApi().subscribe({
      next: (response: ClanType[]) => {
        console.log("Responseeee", response);
        this.appService.setClans(response);
      },
      error: (error: any) => {
        console.log("Errorrrr", error);
      }
    });
  }
}
