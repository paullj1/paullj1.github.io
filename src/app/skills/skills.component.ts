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
        { 
          "text": "Offensive Security Certified Professional (OSCP); 2020, Certificate ID: OS-101-21294",
          "url": "https://www.youracclaim.com/badges/683557d2-42ea-4b77-a188-b5cba4afc954/public_url"
        },
        {
          "text": "GIAC Certified Exploit Researcher and Advanced Penetration Tester (GXPN); 2020 - Present, Analyst Number: 2402",
          "url": "https://www.youracclaim.com/badges/e46a495c-c824-4453-b31d-19284efae4ce/public_url"
        },
        {
          "text": "Certified Information System Security Professional (CISSP); 2014 - Present, Member Number: 482166",
          "url": "https://www.youracclaim.com/badges/9834e3eb-e7e5-4b6c-91ad-79c0e0c75a79/public_url"
        },
        {
          "text": "GIAC Certified Incident Handler (GCIH); 2013 - 2017",
          "url": "https://www.youracclaim.com/badges/ad2b7ebe-d8ce-4c80-8ef8-f00518aa7f38/public_url"
        },
        {
          "text": "CompTIA Security+; 2012 - 2015",
          "url": "https://www.youracclaim.com/badges/6ebe7994-0b1c-4073-bd69-6c8fb45bd17f/public_url"
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
