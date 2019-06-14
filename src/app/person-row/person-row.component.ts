import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-row',
  templateUrl: './person-row.component.html',
  styleUrls: ['./person-row.component.less']
})
export class PersonRowComponent implements OnInit {

  constructor() { }

  @Input() person: any;
  endNames = new Set();
  descripString: string;
  endCount: number;

  ngOnInit() {

    var list = new Array();
    this.person.endorsements.forEach(end => {
      // alert(end.tag);
      list.push(end.tag[0]);
    });

    this.endNames = new Set(list);

    this.descripString = this.person.market + " - " + this.person.cohort;
    this.endCount = this.person.endorsements.length;
  }

}
