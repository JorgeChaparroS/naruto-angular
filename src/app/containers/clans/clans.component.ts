import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app/app.service';
import { ClanType, Constants } from '../../shared/utils/Constants';
import { AlertService } from '../../components/alert/alert.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-clans',
  templateUrl: './clans.component.html',
  styleUrls: ['./clans.component.scss']
})
export class ClansComponent implements OnInit {

  clans: ClanType[] | undefined;
  clansFiltered: ClanType[] | undefined;
  clansPaginated: ClanType[] | undefined;
  enableNextPage = false;
  currentPage = 0;
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  constructor(private readonly appService: AppService,
    private readonly alertService: AlertService) {
  }

  ngOnInit(): void {
    this.clans = this.appService.getClans();
    this.clansFiltered = [...(this.clans || [])];
    this.clansPaginated = this.generatePaginationRecords(0);
    if (!this.clans || this.clans?.length < 1) {
      this.getClans();
    }
    this.subscribeToFormChanges();
  }

  subscribeToFormChanges(): void {
    this.searchForm.valueChanges.subscribe((val: any) => {
      this.filterByName(val.name)
    });
  }

  filterByName(name: string): void {
    const searchBy = name.toUpperCase();
    this.clansFiltered = this.clans?.filter((clan: ClanType) => clan.name?.toUpperCase().includes(searchBy));
    this.clansPaginated = this.generatePaginationRecords(0);
    this.currentPage = 0;
  }

  getClans(): void {
    this.appService.getClansFromApi().subscribe({
      next: (response: ClanType[]) => {
        this.appService.setClans(response);
        this.clans = response;
        this.clansFiltered = [...(this.clans || [])];
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
    this.clansFiltered?.forEach((clan: ClanType, index: number) => {
      if (index >= offset && index < offset + 10) {
        paginatedRecords.push(clan);
      }
    });
    this.enableNextPage = paginatedRecords.length > 9;
    return paginatedRecords;
  }

  onPagination(page: number): void {
    this.currentPage = page;
    this.clansPaginated = this.generatePaginationRecords(page);
  }
}
