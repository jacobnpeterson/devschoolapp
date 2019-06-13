import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-row-small',
  templateUrl: './person-row-small.component.html',
  styleUrls: ['./person-row-small.component.less']
})
export class PersonRowSmallComponent implements OnInit {

  constructor() { }
  @Input() person: {};
  @Input() endorsements: string;
  @Input() first: boolean;

  ngOnInit() {
  }

}

