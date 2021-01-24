import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  players: any = [
    {
      name: "Lionel Messi",
      number: "10",
      team: "FCB",
      poste: "Playmaker",
      age: "33"
    },
    {
      name: "Andreas Iniesta",
      number: "8",
      team: "FCB",
      poste: "Midfielder",
      age: "36"
    },
    {
      name: "Luis Suarez",
      number: "9",
      team: "ATM",
      poste: "Striker",
      age: "33"
    },
    {
      name: "Neymar Junior",
      number: "10",
      team: "PSG",
      poste: "Midfielder",
      age: "28"
    },
    {
      name: "Sergio Ramos",
      number: "4",
      team: "RMD",
      poste: "Center Back",
      age: "34"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
