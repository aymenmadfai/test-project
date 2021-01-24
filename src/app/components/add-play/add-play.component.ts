import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-play',
  templateUrl: './add-play.component.html',
  styleUrls: ['./add-play.component.css']
})
export class AddPlayComponent implements OnInit {
  player: any = {};
  addPlayerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addPlayerForm = this.formBuilder.group({
      name: [''],
      number: [''],
      team: [''],
      poste: [''],
      age: [''],
    })
  }
  addPlayer() {
    console.log('Player: ',this.player);
    this.addPlayerForm.reset();
  }

}
