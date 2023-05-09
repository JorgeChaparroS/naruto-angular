import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() enableNextPage = true;
  @Output() onPagination = new EventEmitter();

  currentPage = 0;
  
  nextPage(): void {
    this.currentPage++;
    this.onClickPagination();
  }

  prevPage(): void {
    this.currentPage--;
    this.onClickPagination();
  }

  onClickPagination(): void {
    this.onPagination.emit(this.currentPage);
  }

}
