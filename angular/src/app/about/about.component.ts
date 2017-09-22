import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  people: any[] = [{
    name: 'Jimmy Neutron',
    role: 'Engineer'
  }, {
    name: 'Leslie Knope',
    role: 'Public Relations'
  }, {
    name: 'Homer Simpson',
    role: 'Donut-Fetching Intern'
  }, {
    name: 'Michael Scott',
    role: 'Generic Boss'
  }, {
    name: 'Bruton Gaster',
    role: 'Sidekick'
  }, {
    name: 'Leo Martinez',
    role: 'Developer'
  }];

  constructor() { }

  ngOnInit() {
  }

}
