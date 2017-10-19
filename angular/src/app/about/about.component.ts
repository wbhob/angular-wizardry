import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  people = [{
    name: 'Harry Potter',
    role: 'Engineer'
  }, {
    name: 'Hermione Granger',
    role: 'Public Relations'
  }, {
    name: 'Ron Weasley',
    role: 'Donut-Fetching Intern'
  }, {
    name: 'Albus Dumbledore',
    role: 'Generic Boss'
  }, {
    name: 'Severus Snape',
    role: 'Sidekick'
  }, {
    name: 'Rubeus Hagrid',
    role: 'Rhubarb?'
  }, {
    name: 'Leo Martinez',
    role: 'Systems Administrator - bless his soul.'
  }];

  constructor() { }

  ngOnInit() {

  }

}
