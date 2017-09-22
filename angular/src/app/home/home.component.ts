import { Component, OnInit } from '@angular/core';

import { HelloWorldService } from '../hello-world.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string;
  date: Date;

  constructor(
    public helloWorldService: HelloWorldService
  ) { }

  ngOnInit() {
    this.message = this.helloWorldService.say('Hello');
    this.date = this.helloWorldService.getDate();
  }

}
