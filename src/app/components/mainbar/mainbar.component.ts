import { Component, OnInit } from '@angular/core';
import { faUsers, faFileText, faHome, faTh, faGavel, faUser, faObjectUngroup, faObjectGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit {

  faHome = faHome;
  faTh = faTh;
  faGavel = faGavel;
  faUser = faUser;
  faUsers = faUsers;
  faFileText = faFileText;
  faObjectUngroup = faObjectUngroup;
  faObjectGroup = faObjectGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
