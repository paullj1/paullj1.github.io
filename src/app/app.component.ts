import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './route-animations';
import { Router } from '@angular/router';

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
	dark_mode: boolean;
	dark_mode_checked: boolean;

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
      color: 'lightblue',
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

  theme_toggle() {
		this.dark_mode = !this.dark_mode;
		if (this.dark_mode) {
			localStorage.setItem('dark_mode', 'on');
			localStorage.removeItem('light_mode');
		} else {
			localStorage.setItem('light_mode', 'on');
			localStorage.removeItem('dark_mode');
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

  constructor(private router: Router) {
    let path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }

  ngOnInit() {
    if (localStorage.getItem('dark_mode')) {
      this.dark_mode = true;
    } else if (localStorage.getItem('light_mode')) {
      this.dark_mode = false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.dark_mode = true;
    } else {
      this.dark_mode = false;
    }
    this.dark_mode_checked = this.dark_mode;

    if (window.innerWidth <= 600) {
      this.makeMobile();
    } else {
      this.makeDesktop();
    }
  }
}

