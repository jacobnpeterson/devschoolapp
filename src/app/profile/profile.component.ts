import { Component, OnInit, Input } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { tags } from '../../assets/data/tags';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tagArray = tags;
  newTags = new Array();

  // Accept input badge names, create and display new badge for each
  getNewTag(event: string) {

    // Only add a tag if 1) its valid, 2) it hasn't already been added
    if(this.tagArray.includes(event) && !this.newTags.includes(event)) {
      this.newTags.push(event);
    }
  }

  // Called when Endorse button is pressed, sends all endorsements to JSON data store
  addEndorsements() {

  }
}
