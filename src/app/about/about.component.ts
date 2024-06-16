import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content = `<p>
  Welcome! I'm Paul Jordan, and this website serves as my professional portfolio and personal showcase. Here, you'll find my resume, a curated collection of my professional and personal projects, and links to my other online profiles. If you have any questions, please feel free to reach out to me at <a href='mailto:paullj1@gmail.com'>paullj1@gmail.com</a>.
  </p><p>
  Originally from Akron, Ohio, I have a deep affinity for the western United States. I'm married to my wonderful partner, and together we are making the most of our youth. My educational background includes high school in Cuyahoga Falls, Ohio, followed by degrees from the University of Akron, and the Air Force Institute of Technology.
  </p><p>
  I am passionate about both the outdoors and computer science. My hobbies include mountain biking, climbing, skiing, hiking, backpacking, and trail running. Additionally, I find great satisfaction in tackling challenging software projects. Music is a constant companion in my life, and I am always eager for my next adventure.
  </p><p>
  Thank you for visiting my site!
  </p>
  `;

}
