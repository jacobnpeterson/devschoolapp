import { Component, OnInit, Input } from '@angular/core';
import { people } from '../../assets/data/people';
import { makeBindingParser } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() { }
  
  @Input() name: string;
  @Input() iconUrl: string;
  @Input() market: string;
  topPeople: {}[];
  marketMap = {
    "Dallas": "DAL",
    "Atlanta": "ATL",
    "Chicago": "CHI",
    "Houston": "HOU",
    "Los Angeles": "LA",
    "New York": "NYC",
    "Philadelphia": "PHI",
    "San Francisco": "SF",
    "Seattle": "SEA",
    "Toronto": "TOR",
    "Washington D.C": "DC"
  }


  ngOnInit() {
  }


  ngOnChanges() {
    let marketPeople;
    if (this.market) {
      marketPeople = people.filter(p => p.market == this.marketMap[this.market]);
    } else {
      marketPeople = people;
    }
    console.log(marketPeople);
    console.log("---");
    this.topPeople = marketPeople.map(p => ({
      person: p,
      count: p.endorsements.filter(e => e.skill.toLocaleLowerCase() === this.name.toLocaleLowerCase()).length
    })).filter(p => p.count > 0).sort((a,b) => {
      if (a.count < b.count) return 1;
      else if (a.count > b.count) return -1;
      else return 0;
    });
  }

}
