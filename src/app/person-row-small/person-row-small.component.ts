import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-row-small',
  templateUrl: './person-row-small.component.html',
  styleUrls: ['./person-row-small.component.less']
})
export class PersonRowSmallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Jacob Peterson'
  cohort = 'C1'
  market = 'DAL'
  endorsements = 23
}

