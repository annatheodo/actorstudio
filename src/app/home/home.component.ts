import { Component, OnInit } from '@angular/core';
import { actors } from './../actors';
import { ActorsService } from './../actors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  actors = actors;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public ActorsService: ActorsService) {}

  ngOnInit() {}
}
