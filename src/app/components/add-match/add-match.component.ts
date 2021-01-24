import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any = {}
  addMatchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addMatchForm = this.formBuilder.group({
      teamone: [''],
      teamtwo: [''],
      scoreone: [''],
      scoretwo: [''],
      logoone: [''],
      logotwo: [''],
    })
  }
  addMatch() {
    console.log(this.match);
  }

}
