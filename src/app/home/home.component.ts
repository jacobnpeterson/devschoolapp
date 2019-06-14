import { Component, OnInit } from '@angular/core';
import { skills } from '../../assets/data/skills';
import { people } from '../../assets/data/people';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  skills = skills;
  people = people;
  searchResults: any;
  selectedMarket: string;

  ngOnInit() {
  }

  searchPeople(e) {
    let text = e.target.value.toLocaleLowerCase();
    if (text.length > 0) {
      this.searchResults = people.filter(p => p.name.toLocaleLowerCase().includes(text));
    } else {
      this.searchResults = undefined;
    }
  }

  filterByMarket(e) {
    if (e.target.innerText === "All Fins") {
      this.selectedMarket = "";
    } else {
      this.selectedMarket = e.target.innerText;
    }
  }


}
