import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  contact_links = [
    { text: 'paullj1@gmail.com', icon: 'email',       href: "mailto:paullj1@gmail.com" },
    { text: '330.607.2765',      icon: 'call',        href: "tel:+13306072765" },
    { text: 'Columbia, MD',      icon: 'location_on', href: "https://goo.gl/maps/Zi1m2LjLuyBPD6qz8" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
