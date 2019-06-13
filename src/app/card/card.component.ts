import { Component, OnInit, Input } from '@angular/core';
import { people } from '../../assets/data/people';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() { }
  
  @Input() name: string;
  @Input() iconUrl: string;
  people = people
  topPeople: {}[]

  ngOnInit() {
    this.topPeople = people.map(p => ({
      person: p,
      count: p.endorsements.filter(e => e.skill.toLocaleLowerCase() === this.name.toLocaleLowerCase()).length
    })).filter(p => p.count > 0).sort((a,b) => {
      if (a.count < b.count) return 1;
      else if (a.count > b.count) return -1;
      else return 0;
    });
    //TODO limit to 3
  }

}
