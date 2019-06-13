import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, last } from 'rxjs/operators';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { tags } from '../../assets/data/tags';
import { people } from '../../assets/data/people';
import { skills } from '../../assets/data/skills';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  tagArray = tags;
  newTags = new Array();
  people = people;
  person: any;
  allSkills = skills
  endorsements: any;

  ngOnInit() {
    this.person = people[this.route.snapshot.params['id']]
    // let skillsArray = []
    // this.person.endorsements.forEach(e => {
    //   let skill = skillsArray.filter(s => s.skill = e.skill)[0];
    //   if (skill) {
    //     //augment

    //   } else {
    //     skillsArray.push({
    //       skill: e.skill,
    //       tags: e.tag,
    //       count: 1
    //     });
    //   }
    // });
    // this.personSkills = skillsArray 
    this.person.endorsements = this.person.endorsements.sort((a,b) => {
      if (a.skill < b.skill) return 1;
      else if (a.skill > b.skill) return -1;
      else return 0;
    });
    let endorsementArray = [];
    let lastSkill = this.person.endorsements[0].skill;
    let tags = [];
    let count = 0;
    this.person.endorsements.forEach(e => {
      if (e.skill != lastSkill) {
        endorsementArray.push({
          skill: lastSkill,
          tags: new Set(tags),
          count: count
        });
        count = 0;
        tags = [];
      }
      count++;
      tags = tags + e.tag

      lastSkill = e.skill
    });
    endorsementArray.push({
      skill: lastSkill,
      tags: new Set(tags),
      count: count
    });
    this.endorsements = endorsementArray;
  }

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
