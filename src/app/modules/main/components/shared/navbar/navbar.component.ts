import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private title : string =  "AngularBS Template Title"
  private isCollapsed : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
