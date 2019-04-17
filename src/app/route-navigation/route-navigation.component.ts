import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'route-navigation',
  templateUrl: './route-navigation.component.html',
  styleUrls: ['./route-navigation.component.scss']
})
export class RouteNavigationComponent implements OnInit {

  @Input() routes: any;
  constructor() { }

  ngOnInit() {
  }

}
