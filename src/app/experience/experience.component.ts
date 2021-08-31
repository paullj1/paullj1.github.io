import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  education = [
    { 
      institution: "Air Force Institute of Technology",
      link: "https://www.afit.edu",
      location: "Wright-Patterson AFB, OH, USA",
      degree: "Master of Science in Computer Science",
      year: "2016",
      gpa: "3.96/4.00"
    },
    { 
      institution: "The University of Akron",
      link: "https://uakron.edu",
      location: "Akron, OH, USA",
      degree: "Bachelor of Science in Computer Science",
      year: "2011",
      gpa: "3.27/4.00"
    },
    { 
      institution: "Community College of the Air Force",
      link: "https://www.airuniversity.af.edu/",
      location: "Montgomery, AL, USA",
      degree: "Associate of Applied Science",
      year: "2010",
      gpa: ""
    }
  ];

  work_experience = [
    {
      org: "███████████████",
      org_link: "",
      location: "Various Locations",
      dates: "Apr 2017 - Present",
      title: "Journeyman Unix Operator",
      bullets: [
        'Executed hundreds of Computer Network Exploitation (CNE) ops to fulfill critical █████████████ requirements.',
        'Advised and drove enterprise wide decisions for cyber security tools and techniques as a Unix Expert.',
        'Trained groups of CNE operators on cutting-edge tools and methodologies.',
        'Maintained and expanded knowledge of best practices in Advanced Persistent Threat (APT) tradecraft.',
        'Developed, tested, and integrated tools and techniques at the cutting-edge of nation-state of CNE.',
      ]
    },
    {
      org: "United States Cyber Command", 
      org_link: "https://www.cybercom.mil/",
      location: "Various Locations",
      dates: "Sep 2016 - August 2021",
      title: "Cyber Attack Operator",
      bullets: [
        'Executed Offensive Cyber Operations (OCO) against adversary networks in support of National Defense priorities.',
        'Developed, tested, and performed comprehensive OPSEC evaluation of OCO capabilities.',
        'Oversaw and managed the training and development of a team of OCO personnel.',
      ]
    },
    {
      org: "CyDefe Labs", 
      org_link: "https://labs.cydefe.com/",
      location: "Remote",
      dates: "Sep 2015 - Present",
      title: "Chief Technology Officer",
      bullets: [
        'Develop and maintain virtualized cyber training infrastructure for enterprise customers.',
        'Designed and deployed angular/go webapp for delivering training material and environment to customers.',
      ]
    },
    {
      org: "Air Force Space Command, Cyberspace Support Squadron", 
      org_link: "https://www.af.mil/",
      location: "Scott AFB, IL",
      dates: "Aug 2013 - Aug 2015",
      title: "Mobile Communications Planning Officer",
      bullets: [
        "Technical requirements lead for IT wired/wireless transport, Voice over IP, Video Teleconference, and Desktop Collaboration upgrades",
        "Developed Air Force strategy for transitioning 117 bases from legacy voice equipment to Voice over IP", 
        "Created IT spending waiver request tracking web application", 
        "Awarded junior officer of the year in 2014 and Excellence in Government Award 2015 by the Greater St. Louis Federal Executive Board"
      ]
    },
    {
      org: "United States Air Force, Cyber Officer Qualification Training", 
      org_link: "https://www.af.mil/",
      location: "",
      dates: "Jul 2012 - Aug 2013",
      title: "Student",
      bullets: [
        "Intermediate Network Warfare Training, Hurlburt Field, FL (May - Aug 2013) - Graduated #1/37 with 100% academic average",
        "Undergraduate Cyber Training, Keesler AFB, MS (Sept 2012 - May 2013) - Graduated top 10% with 92% academic average",
        "Officer Training School, Maxwell AFB, AL (Jul - Sept 2012)",
      ]
    },
    {
      org: "Commercial Timesharing Inc", 
      org_link: "https://www.comtime.com",
      location: "Akron, OH",
      dates: "May 2011 - Jul 2012",
      title: "Software Engineer",
      bullets: [
        "Independently developed cross-platform UI called TTOCUI currently deployed worldwide using GTK+ framework",
        "Maintained and developed PHP/JavaScript web application written using the extJS framework",
        "Maintained and developed a data acquisition application in C",
        "Maintained and developed a data warehousing business intelligence application",
      ]
    },
    {
      org: "The K Company", 
      org_link: "http://www.thekcompany.com",
      location: "Akron, OH",
      dates: "Aug 2004 - May 2011",
      title: "System Administrator",
      bullets: [
        "Managed and maintained Microsoft Server 2000, 2007, Microsoft Exchange Server 2007, and the Active Directory server",
        "Managed, serviced, and maintained twenty-three client computers on-site, and twenty remote clients",
        "Provided technical support for forty-three users",
      ]
    },
    {
      org: "121st Security Forces Squadron", 
      org_link: "https://www.121arw.ang.af.mil",
      location: "Rickenbacker ANGB, OH",
      dates: "May 2006 - Jul 2012",
      title: "Security Forces Journeyman",
      bullets: [
        "Provided security for KC-135 aircraft and base personnel",
        "Deployed in support of Operation Enduring Freedom to Eskan Village, Kingdom of Saudi Arabia",
        "Deployed in support of Operation Enduring Freedom to Subic Bay, Philippines",
        "Provided technical support as a client support administrator for user workstations",
      ]
    }
  ];

  volunteer_experience = [
    {
      org: "Military Cyber Professionals Association - St. Louis Chapter",
      org_link: "https://milcyber.org",
      location: "Scott AFB, IL",
      dates: "Nov 2014 - Aug 2015",
      title: "Founder and President",
      bullets: [
        "Led the stand-up of one of the most successful chapters in the MCPA",
        "Organized community outreach events including First Tech Challenge, Student Hackathon, and MCPA Hack the Arch 2015",
        "Built and maintained the chapter's website",
        "Awarded Order of Thor for contributions in building the chapter",
      ]
    },
    {
      org: "Armed Forces Communications and Electronics Association - Scott-St. Louis Chapter",
      org_link: "https://scott.afceachapters.org",
      location: "Scott AFB, IL",
      dates: "Dec 2013 - Jan 2015",
      title: "Treasurer",
      bullets: [
        "Managed the organization's $150,000 budget",
        "Organized golf tournament fund raiser for chapter scholarship fund",
        "Eliminated unsustainable deficit spending of $10,000 annually",
        "Awarded Distinguished Young AFCEAN in the midwest region in 2014",
      ]
    },
    {
      org: "Junior Code Academy",
      org_link: "",
      location: "O'Fallon, IL",
      dates: "May 2015 - Jul 2015",
      title: "Instructor",
      bullets: [
        "Developed Computer Science 1 and 2 curriculum for 12-15 age group",
        "Implemented and taught Computer Science 2",
      ]
    }
  ];

}
