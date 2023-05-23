import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app/app.service';
import { CharacterType, Constants } from '../../shared/utils/Constants';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertService } from '../../components/alert/alert.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: CharacterType[] | undefined;
  offset = 0;
  currentPage = 0;
  enableNextPage = false;
  sort = true;
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });
  characterSelected: CharacterType | undefined;
  infoKeys: string[] = [];
  indexImageCharacter = 0;
  modalCharacterId = Constants.COMPONENTS.ALERT_CHARACTER_DETAIL;
  
  constructor(public appService: AppService,
    public alertService: AlertService) {
  }

  ngOnInit(): void {
    this.getCharacters();
    this.subscribeToFormChanges();
  }

  subscribeToFormChanges(): void {
    this.searchForm.get('name')?.valueChanges.subscribe((name: string) => {
      if (!name.length) {
        this.resetPagination();
        this.getCharacters();
      }
    });
  }

  getCharacters(): void {
    this.characters = [];
    this.appService.getCharactersFromApi(this.offset, this.sort, this.searchForm.get('name')?.value).subscribe({
      next: (response: CharacterType[]) => {
        this.characters = response;
        this.enableNextPage = this.characters.length > 5;
      },
      error: (error: any) => {
        if (error.status !== 404) {
          this.alertService.open(Constants.COMPONENTS.ALERT_ERROR_ID);
        }
      }
    });
  }

  onCheckDetail(character: CharacterType): void {
    this.characterSelected = character;
    this.indexImageCharacter = 0;
    this.infoKeys = Object.keys(this.characterSelected?.info);
    this.alertService.open(this.modalCharacterId);
  }

  onChangeImage(operation: string): void {
    const valueToAdd = operation === 'increase' ? 1 : -1;
    this.indexImageCharacter += valueToAdd;
  }

  buttonClicked(): void {
    if (this.searchForm.get('name')?.value) {
      this.onPagination(0);
    }
  }

  onPagination(page: number): void {
    this.currentPage = page;
    this.offset = page * 6;
    this.getCharacters();
  }

  closeDetail(): void {
    this.alertService.close(this.modalCharacterId);
  }

  changeSorting(): void {
    this.sort = !this.sort;
    this.resetPagination();
    this.getCharacters();
  }

  resetPagination(): void {
    this.currentPage = 0;
    this.offset = 0;
  }
}
