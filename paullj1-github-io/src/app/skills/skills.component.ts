import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  sections = [
    {
      title: "Software Engineering",
      icon: "desktop_mac",
      color: "blue",
      bullets: [
        "Proficiency using compiled languages including C, C++, Java, C#, Objective C, swift, Go, and Rust",
        "Proficiency in application scripting including Python, bash, ruby",
        "Experience using and reversing Assembly (Atmel, x86, x86_64, and ARM)",
        "Experience using advanced deep learning techniques in Matlab, R, and Python",
        "Experience training and using deep learning algorithms like RNNs/LSTMs, ANNs, SVMs, LDA/QDA",
        "Experience using software engineering tools and methodologies including UML, Scrum, SVN, Git",
        "Working level knowledge of User Interface frameworks like Qt and GTK+",
        "Familiarity with regular expressions, parsers, compilers, database design, SQL, NoSQL",
      ]
    },
    {
      title: "Dev Ops",
      icon: "memory",
      color: "orange",
      bullets: [
        "Proficiency building, maintaining, and deploying Docker containers for production, development, and testing",
        "Proficiency deploying and maintaining production systems using with Docker Swarm, and Portainer",
        "Experience with CI/CD pipelines using Jenkins, and Gitlab-CI",
        "Familiarity deploying and maintaining Kubernetes clusters",
      ]
    },
    {
      title: "Web Development",
      icon: "public",
      color: "green",
      bullets: [
        "Proficiency with web technologies including HTML5, CSS/SCSS, JavaScript/TypeScript/ES6, jQuery, extJS, XML",
        "Experience using front-end web frameworks like angular, vueJS, ReactJS",
        "Working level knowledge using backend databases such as MySQL, MongoDB, Postrgres, and sqlite",
        "Experience with web application framework development using Django, Tornado, Flask, Ruby on Rails, Node.js",
        "Experience using various CSS frameworks like Materialize CSS, Bootstrap",
      ]
    },
    {
      title: "Cyber Security",
      icon: "security",
      color: "red",
      bullets: [
        "Proficiency with GNU/Linux, macOS, Windows (NT 5, 6, and 10)",
        "Experience with advanced debugging and exploit development in x86, x86_64, and ARM",
        "Experience using advanced debugging tools like gef, peda, pwntools, immunity debugger",
        "Familiarity with computer architecture, virtualization, reverse engineering",
        "Experience doing packet analysis, cryptanalysis, static and behavioral malware analysis",
        "Working knowledge of Cisco enterprise architectures, campus area network design and operation, data center design, firewalls, web proxies, IDS/IPS, networking protocols, network security strategies, cryptography",
        "Familiarity with WAN protocols like MPLS, Frame Relay, BGP, EIGRP, OSPF",
      ]
    },
    {
      title: "Misc",
      icon: "blur_on",
      color: "cyan",
      bullets: [
        "Strong leadership experience, communication and interpersonal skills",
        "Experience teaching complex concepts and developing training scenarios and environments",
        "Experience with classified systems, U.S. Top Secret/SCI security clearance, 14 years of Federal service",
      ]
    },
    {
      title: "Certifications",
      icon: "edit",
      color: "purple",
      bullets: [
        "Certified Information System Security Professional (CISSP); 2014 - Present, Member Number: 482166",
        "GIAC Certified Incident Handler (GCIH); 2013 - 2017",
        "CompTIA Security+; 2012 - 2015",
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
