import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app/app.service';
import { CharacterType } from '../../shared/utils/Constants';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: CharacterType[] | undefined;
  offset = 0;
  sort = true;

  constructor(private readonly appService: AppService) {

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.appService.getCharactersFromApi(this.offset, this.sort).subscribe({
      next: (response: CharacterType[]) => {
        console.log("Responseeee", response);
      },
      error: (error: any) => {
        console.log("Errorrrr", error);
      }
    });
  }
}
