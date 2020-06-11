import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements OnInit {

  title = "Paul Jordan - Software Engineer"
  links = [
    {
      icon:  'person',
      color: 'blue',
      route: "/profile",
      title: 'Profile'
    }, {
      icon:  'history',
      color: 'orange',
      route: "/experience",
      title: 'Experience'
    }, {
      icon:  'desktop_mac',
      color: 'green',
      route: "/projects",
      title: 'Projects'
    }, {
      icon:  'equalizer',
      color: 'peru',
      route: "/skills",
      title: 'Skills'
    }, {
      icon:  'library_books',
      color: 'sienna',
      route: "/publications",
      title: 'Publications'
    }, {
      icon:  'info',
      color: 'orangered',
      route: "/about",
      title: 'About'
    }];

  sm_links = [
    { icon: 'sm-links mdi mdi-github',   href: "https://github.com/paullj1" },
    { icon: 'sm-links mdi mdi-linkedin', href: "https://www.linkedin.com/in/paullj1" },
  ];

  public navopen: boolean;
  public navmode: string;
  public mobile: boolean;

  openNav() {
    this.navopen = true;
  }

  closeNav() {
    if (this.mobile) {
      this.navopen = false;
    }
  }

  private onResize(event) {
    if (event.target.innerWidth > 600 && this.mobile) {
      this.makeDesktop();
      return
    }

    if (event.target.innerWidth <= 600 && !this.mobile) {
      this.makeMobile();
      return
    }
  }

  private makeMobile() {
    this.mobile = true;
    this.navopen = false;
    this.navmode = "over";
  }

  private makeDesktop() {
    this.mobile = false;
    this.navopen = true;
    this.navmode = "side";
  }


  ngOnInit() {
    if (window.innerWidth <= 600) {
      this.makeMobile();
    } else {
      this.makeDesktop();
    }
  }
}

