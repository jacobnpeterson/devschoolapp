import { Component, OnInit } from '@angular/core';
import { skills } from '../../assets/data/skills'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  skills = skills

}
