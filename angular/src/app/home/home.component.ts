import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../hello-world.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noun: string;

  constructor(
    public helloWorldService: HelloWorldService
  ) { }

  ngOnInit() {
    // this.noun = {}
    this.noun = this.helloWorldService.say('giraffe');
  }

}
