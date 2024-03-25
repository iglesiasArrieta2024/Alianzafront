import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    mobileQuery: MediaQueryList;
    menunav=[
      {name: "home",route:"home",ico:"home"},
      {name: "Cliente",route:"cliente",ico:"person"},
      {name: "Clientelookhistory",route:"clientelookhistory",ico:"history"},
      {name: "EmergecyPin",route:"emergecyPin",ico:"keyboard"},
      {name: "Emergecyhistory",route:"emergecyhistory",ico:"keyboard"}
      
    ];
  constructor(media :MediaMatcher) {
    this.mobileQuery=media.matchMedia('(max-width:600px)');
   }

  ngOnInit(): void {
  }

}
