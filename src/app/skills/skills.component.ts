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
        "Programming Languages: Proficient in compiled languages including C, C++, Java, C#, Objective-C, Swift, Go, and Rust.",
        "Scripting Languages: Proficient in application scripting with Python, Bash, and Ruby.",
        "Assembly Language: Experienced in using and reversing Assembly for Atmel, Xtensa, x86, x86_64, and ARM architectures.",
        "Deep Learning and Data Analysis: Skilled in advanced deep learning techniques using Matlab, R, and Python; proficient in training and utilizing deep learning algorithms such as RNNs/LSTMs, ANNs, SVMs, LDA/QDA.",
        "Software Engineering Tools: Experienced with software engineering tools and methodologies including UML, Scrum, SVN, and Git.",
        "User Interface Development: Working knowledge of UI frameworks like Qt and GTK+.",
        "Database and Compiler Skills: Proficient with regular expressions, parsers, compilers, database design, SQL, and NoSQL databases.",
      ]
    },
    {
      title: "Dev Ops",
      icon: "memory",
      color: "orange",
      bullets: [
        "Proficient in building, maintaining, and deploying Docker containers for production, development, and testing environments.",
        "Skilled in deploying and maintaining production systems using Docker Swarm and Portainer.",
        "Experienced with CI/CD pipelines using Jenkins, GitLab CI, and Bamboo.",
        "Familiar with deploying and maintaining Kubernetes clusters.",
      ]
    },
    {
      title: "Web Development",
      icon: "public",
      color: "green",
      bullets: [
        "Web Technologies: Proficient with HTML5, CSS/SCSS, JavaScript/TypeScript/ES6, jQuery, extJS, and XML.",
        "Front-End Frameworks: Experienced in using front-end web frameworks such as Angular, VueJS, and ReactJS.",
        "Backend Databases: Proficient with MySQL, MongoDB, PostgreSQL, and SQLite.",
        "Web Application Frameworks: Experienced in web application framework development using Django, Tornado, Flask, Ruby on Rails, and Node.js.",
        "CSS Frameworks: Skilled in using various CSS frameworks, including Materialize CSS and Bootstrap.",
      ]
    },
    {
      title: "Information Security",
      icon: "security",
      color: "red",
      bullets: [
        "Operating Systems: Proficient with GNU/Linux, FreeBSD, macOS, and Windows.",
        "Debugging and Exploit Development: Experienced in advanced debugging and exploit development on x86, x86_64, and aarch64 architectures.",
        "Debugging Tools: Skilled in using advanced debugging tools such as GEF, PEDA, Pwntools, and Immunity Debugger.",
        "Computer Architecture and Virtualization: Familiar with computer architecture, virtualization, and reverse engineering.",
        "Malware and Packet Analysis: Experienced in packet analysis, cryptanalysis, and static and behavioral malware analysis.",
        "Network Security: Working knowledge of Cisco enterprise architectures, campus area network design and operation, data center design, firewalls, web proxies, IDS/IPS, networking protocols, network security strategies, and cryptography.",
        "WAN Protocols: Familiar with WAN protocols including MPLS, Frame Relay, BGP, EIGRP, and OSPF.",
      ]
    },
    {
      title: "Misc",
      icon: "blur_on",
      color: "cyan",
      bullets: [
        "Leadership and Communication: Strong leadership experience with excellent communication and interpersonal skills.",
        "Teaching and Training: Experienced in teaching complex concepts and developing training scenarios and environments.",
        "Security Clearance and Federal Service: Extensive experience with classified systems; holds a U.S. Top Secret/SCI security clearance with " + ((new Date().getFullYear()) - 2006) + " years of Federal service.",
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
