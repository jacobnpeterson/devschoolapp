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
  skill: any;

  ngOnInit() { this.skill = skills[this.route.snapshot.params['name']]; }

}
