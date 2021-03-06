import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})

export class CreateCharacterComponent implements OnInit {
  aviableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ];
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submitedForm) {
    // console.log(submitedForm.value);
    if (submitedForm.invalid) {
      return;
    }
    this.swService.addCharacter(submitedForm.value.name, submitedForm.value.side);
  }
}
