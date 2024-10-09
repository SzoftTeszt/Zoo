import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  menuItems =[
    {link:"animals", text:"Állatok"},
    {link:"login", text:"Bejelentkezés"},
    {link:"help", text:"Súgó"},
    {link:"#", text:"Regisztráció"},
    {link:"#", text:"Támogatás"},
  ]
}
