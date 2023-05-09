import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app/app.service';
import { ClanType, Constants } from '../../shared/utils/Constants';
import { AlertService } from '../../components/alert/alert.service';

@Component({
  selector: 'app-clans',
  templateUrl: './clans.component.html',
  styleUrls: ['./clans.component.scss']
})
export class ClansComponent implements OnInit {

  clans: ClanType[] | undefined;
  clansPaginated: ClanType[] | undefined;
  enableNextPage = false;

  constructor(private readonly appService: AppService,
    private readonly alertService: AlertService) {}

  ngOnInit(): void {
    this.clans = this.appService.getClans();
    this.clansPaginated = this.generatePaginationRecords(0);
    if (!this.clans || this.clans?.length < 1) {
      this.getClans();
    }
  }

  getClans(): void {
    this.appService.getClansFromApi().subscribe({
      next: (response: ClanType[]) => {
        this.appService.setClans(response);
        this.clans = response;
        this.clansPaginated = this.generatePaginationRecords(0);
      },
      error: () => {
        this.alertService.open(Constants.COMPONENTS.MODAL_ERROR_ID);
      }
    });
  }

  generatePaginationRecords(currentPage: number): ClanType[] {
    const paginatedRecords: ClanType[] = [];
    const offset = currentPage * 10;
    this.clans?.forEach((clan: ClanType, index: number) => {
      if (index >= offset && index < offset + 10) {
        paginatedRecords.push(clan);
      }
    });
    this.enableNextPage = paginatedRecords.length > 9;
    return paginatedRecords;
  }

  onPagination(page: number): void {
    this.clansPaginated = this.generatePaginationRecords(page);
  }
}
