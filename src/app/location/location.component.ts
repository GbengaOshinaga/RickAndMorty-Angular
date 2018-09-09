import { Component, OnInit } from '@angular/core';

import { Location } from '../location';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location: Location;

  constructor(
    private route: ActivatedRoute, 
    private characterService: CharacterService
    ) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation () {
    const url = this.route.snapshot.paramMap.get('url');
    this.characterService.getLocation(url)
      .subscribe(location => this.location = location);
  }

}
