import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters)
  }

}
