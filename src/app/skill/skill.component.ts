import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tags } from '../../assets/data/tags';
import { people } from '../../assets/data/people';
import { skills } from '../../assets/data/skills';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  tags = tags;
  people = people;
  skills = skills;
  skill: string;
  imgSrc: string;
  skillPeople = new Array();

  ngOnInit() {
    // Assign `skill` to correct skill
    this.skill = this.route.snapshot.params['name'];
    // alert(this.skill);

    // Fetch icon url
    this.skills.forEach(element => {
      if(element.name == this.skill) {
        this.imgSrc = element.iconUrl;
      }
    });
    // alert(this.imgSrc);

    // Populate people only on that page
    this.people.forEach(person => {
      if(person.endorsements.filter(end => end.skill.toLowerCase() == this.skill).length > 0) {
        this.skillPeople.push(person);
      }
    });
    // alert(this.skillPeople.length);


  }

}
