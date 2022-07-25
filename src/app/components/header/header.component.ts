import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faCaretDown, faCogs, faIdCard, faKey, faSignOut, faUser, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCaretDown = faCaretDown;
  faIdCard = faIdCard;
  faCogs = faCogs;
  faUserCircle = faUserCircle;
  faUserPlus = faUserPlus;
  faAddressBook = faAddressBook;
  FaConfig = FaConfig;
  faUser = faUser;
  faKey = faKey;
  faSignOut = faSignOut;


  public items = [
    {
      text: 'Mi Perfil',
      iconCss: faUser
    },
    {
      text: 'Cambiar Contraseña',
      iconCss: faKey
    },
    {
      text: 'Salir',
      iconCss: 'ddb-icons e-read'
    },
    {
      text: 'Like Message',
      iconCss: faSignOut
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
