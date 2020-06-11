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

  content = `
    <p>
Hello! My name is Paul Jordan and I created this site to give myself a professional public facing site to tell you about me and the work that I do. On this site, you'll find my resume, a collection of my professional and personal projects, and some links to my other sites. If you have any questions, please feel free to contact me at <a href='mailto:paullj1@gmail.com'>paullj1@gmail.com</a> and I'd be happy to answer them!
  </p><p>
I'm originally from Akron, Ohio but my heart belongs in the western US. I'm currently on active duty with the US Air Force living in Columbia, MD. I'm married to the girl of my dreams and we're both very much enjoying our youth. I went to high school in a town outside Akron called Cuyahoga Falls and then to college at the University of Akron. I'm extremely passionate about the outdoors and computer science. I love mountain biking, climbing, skiing, hiking, backpacking, and trail running. I also really enjoy a challenging software project. I think music makes everything better and I can't wait for my next adventure.
    </p>
  `;

}
