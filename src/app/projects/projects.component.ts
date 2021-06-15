import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

export interface ImagePopupSource {
  src: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
//  {
//    title: "RaspbabyPiCam",
//    content: `
//    `,
//    images: [
//    ]
//  },
    {
      title: "CyDefe Labs",
      content: `<p>
        I started a company with a friend of mine in 2014 in order to promote
        better info sec training and education.  The company has evolved over
        time, but lately, we've been focused on making custom training
        environments.  Our current product is a custom Go back end serving a
        reactive Angular front-end.  The back end is capable of connecting a
        student to a virtualized or containerized (depending on how the lab is
        configured) isolated training environment via a VNC connection over a
        websocket.  The entire solution is accessible in a modern web browser
        over tcp/443.  We put together a demo video to illustrate the concept.
      </p><p style='width:80%;margin:auto'>
        <video muted controls style='display:block;width=100%;max-width:640px;margin:auto'>
          <source src='https://labs.cydefe.com/assets/LabsDemo.mp4' type='video/mp4'>
          <img src='https://labs.cydefe.com/assets/logo.png' alt='CyDefe Labs'>
        </video>
      </p>`,
      images: [
      ]
    },
    {
      title: "TreatLife HomeKit",
      content: `<p>
After moving to Maryland, I decided it was time to go all-in on the smart home.
I had previously played around with using <a href='https://homebridge.io'
target="_blank">Homebridge</a> to enable Apple HomeKit for non-HomeKit devices,
but did not feel like maintaining the service in perpetuity.  So I started doing
some research on types of devices that can support HomeKit out of the box when I
discovered the <a href='https://www.espressif.com/en/products/socs/esp8266'
target='_blank'>ESP 8266</a>.  The MCU had been used in a wide array of cheap
devices, and the open source community had created a few open source options for
the hardware.  It turned out that I had unknowingly purchased a few of light
switches with the hardware when I was using HomeBridge.  So I cracked them open
and flashed them with the <a
href='https://github.com/RavenSystem/esp-homekit-devices'
target='_blank'>HomeKit Accessory Architect (HAA)</a> firmware.
        </p>
        <p>
Unfortunately, I had a better use-case for switches that offered dimming
capability than simple a relay, and there wasn't a clean way to support the
majority of smart switches on the market with HAA.  These switches typically
used the ESP 8266 as a WiFi bridge to a smaller MCU that actually controlled the
TRIAC dimming circuit.  They used the ESP 8266 UART interface to send and
receive updates to the state of the light.  So I decided to use the <a
href='https://www.treatlife.tech' target='_blank'>TreatLife</a> series of dimmer
switches.  They were highly rated on Amazon, and all of their dimmers appeared
to use the ESP 8266 MCU.  The ESP 8266 communicated with the secondary MCUsusing
a <a href='https://www.tuya.com' target='_blank'>Tuya</a> protocol over UART.
Fortunately, the <a href='https://tasmota.github.io/docs/'
target='_blank'>Tasmota</a> project had done a decent job of documenting the
protocol, but they didn't seem like a great place to implement HomeKit support,
so I set out to write my own firmware.
        </p>
        <p>
Fortunately, I knew a lot of the features I wanted to support after having used Tasmota, and HAA.  I wanted the ability to do over-the-air updates, and dynamic WiFi config.  For both of those features, I started with the <a href='https://www.arduino.cc/reference/en/libraries/wifimanager/' target='_blank'>Arduino WiFi Manager</a> library, and then added the HomeKit support using the <a href='https://www.arduino.cc/reference/en/libraries/homekit-esp8266/' target='_blank'>HomeKit ESP8266</a> library.  The last thing to do was to reverse which messages controlled the various functions of the dimmer switch.  For this, I used Tasmota, and the <a href='https://github.com/sillyfrog/Tasmota-Tuya-Helper' target='_blank'>Tasmota Tuya Helper</a> bookmarklet.  The four devices the firmware my firmware supports are:
        </p>
        <ul>
          <li>
            <a href='https://smile.amazon.com/dp/B07PJTLB7Z' target='_blank'>DS01C Touch Dimmer</a>, <a href='https://smile.amazon.com/dp/B07YKFSWJN' target='_blank'>DS02C Dimmer Switch</a>, and the <a href='https://smile.amazon.com/dp/B08R89VNMV' target='_blank'>DS02 Three-Way Dimmer Switch</a>
            <table style='padding:10px;'>
              <tr>
                <th>DpID</th>
                <th>Function</th>
              </tr>
              <tr>
                <td>0x01</td>
                <td>Toggle Light on/off</td>
              </tr>
              <tr>
                <td>0x02</td>
                <td>Brightness value 0-1000</td>
              </tr>
              <tr>
                <td>0x03</td>
                <td>Minimum dimmer value 10-1000 (which scales the range on the physical switch)</td>
              </tr>
              <tr>
                <td>0x04</td>
                <td>Dimming type used for different bulb styles</td>
              </tr>
              <tr>
                <td>0x66</td>
                <td>Timer in minutes which when set, will count down to zero before turning off the light</td>
              </tr>
            </table>
          </li>
          <li>
            <a href='https://smile.amazon.com/dp/B086PPRWL7' target='_blank'>DS03 Dimmer & Fan Control</a>
            <table style='padding:10px;'>
              <tr>
                <th>DpID</th>
                <th>Function</th>
              </tr>
              <tr>
                <td>0x01</td>
                <td>Toggle fan on/off</td>
              </tr>
              <tr>
                <td>0x03</td>
                <td>Fan speed (0, 1, 2, or 3)</td>
              </tr>
              <tr>
                <td>0x09</td>
                <td>Toggle light on/off</td>
              </tr>
              <tr>
                <td>0x0a</td>
                <td>Brightness value (0-1000)</td>
              </tr>
              <tr>
                <td>0x65</td>
                <td>Timer in minutes which when set, will count down to zero before turning off the fan</td>
              </tr>
              <tr>
                <td>0x67</td>
                <td>Timer in minutes which when set, will count down to zero before turning off the light</td>
              </tr>
              <tr>
                <td>0x6a</td>
                <td>Minimum dimmer value 10-1000 (which scales the range on the physical switch)</td>
              </tr>
            </table>
          </li>
        </ul>
        <p>
When it was done, I published the code, and associated complied firmware images
on a <a href='https://github.com/paullj1/TreatLife-HomeKit'
target='_blank'>project GitHub</a> page, with a simple GitHub Pages branch
hosted at <a
href='https://paullj1.com/TreatLife-HomeKit/' target='_blank'>paullj1.com/TreatLife-HomeKit</a>.
        </p>
      `,
      images: [
       'treatlife.jpg'
      ]
    },
    {
      title: "HackTheArch",
      content: `<p>
Following the success of the CTF the St. Louis chapter of the MCPA had put on
in the Summer of 2015, we decided that we would make it a recurring event.
Unfortunately, the scoring platform that we had used to keep track of team
scores did not meet our needs and was cumbersome to work with.  We decided to
implement our own scoring server and we decided to name it after our
competition, "HackTheArch".
        </p><p>
HackTheArch is a responsive Ruby on Rails application with a comprehensive test
harness	that gives CTF designers complete control without having to worry about
the scoring platform.  We have added a few features we have not seen in other
open source scoring platforms and are extremely proud of the result.
HackTheArch implements an optional web-based administration console for
creating, changing, and deleting challenges and hints.  We've implemented a
dynamic hint system that allows competition designers to optionally provide
hints for a configurable number of points to be subtracted either when the
problem is solved or when the hint is requested adding a whole new level of
complexity to CTF.  Further, the hints can be optionally provided to certain
brackets as a type of handicap for less experienced players.  We also implement
an optional Stripe payment system so competition designers can collect money
securely from competitors for registration.  Finally, we have extensively
tested the application for security vulnerabilities with no serious findings.
The project has been published as open source and is available at the St. Louis
MCPA <a href="https://github.com/mcpa-stlouis/hack-the-arch">github</a> page.
We also host a live demo at: <a
href="https://hackthearch.herokuapp.com">https://hackthearch.herokuapp.com</a>.
        </p>`,
			images: [
        "hta-1.png",
        "hta-2.png",
        "hta-3.png",
			]
    },
    {
      title: "Global Hack IV",
      content: `<p>
On June 7th 2015, I along with two friends developed an app for the social
networking site lockerdome.com for GlobalhackIV and placed second out of thirty
teams winning $15,000.  The teams were asked by the prize sponsor
lockerdome.com, to build a new method for their publishers to provide engaging
content.  Our idea was to create a way for the publishers to easily create
games to engage their users.  So, how do you create a game that is easily
branded and infinitely customizable?  How about "choose your own adventure"
games!  Added bonus, the popular variable outcome quizzes can easily be
implemented using our tool.  We figured that we weren't marketing professionals
so we would leave marketing to them and focus on a way for the content
providers to be able to introduce their own content in a new, but somehow
familiar and proven way.  Choose your own adventure games have been around
forever, our tool brings them back with some twenty-first century updates.
        </p><p>
The app was created using JavaScript with some help from jQuery.  It interfaced
with the lockerdome API and produced a JSON object to be interpreted by a
custom iframe we wrote.  The game was implemented as a simple graph stored as a
single dimensional array.  Each index in the array had up to four pointers to
children and an optional timer.  If the timer was set, an auto-advance child
had to be chosen so the game knew which slide to load when the timer ran out.
        </p>`,
      images: [
        "globalhack.jpg"
      ]
    },
    {
      title: "PiTherm",
      content:`<p>
This was my first real Raspberry Pi project.  One day I realized just how
simple thermostats were.  The one we had in our house was too simple and only
had a few set points.  We’d occasionally forget to turn it down when we left
and thus were wasting a lot of energy.  Additionally, I realized that if I had
a Raspberry Pi controlling my thermostat, then I could do things based on
whether my phone (and by extension myself) was in the house.  Further, if I
forgot to set it to a more energy efficient set point before I left the house
then I could always VPN in and fix it.  I did a little research and realized a
thermostat was basically three switches or relays and a temperature sensor.  So
I decided to build a solid state relay board with three relays (heat, cool, and
fan).  I ordered a 1wire thermometer and wired it all up to the handy GPIO pins
on the Raspberry Pi.
      </p>
<h2>The Controller</h2>
      <p>
The backend controller is written in python and very simply just checks and
updates the MySQL database.  Depending on user input to the database and input
received from the 1wire temperature sensor, the controller will drive the GPIO
pins linked to the relays to turn the heat, cool, or fan on or off.  It also
keeps the database updated with the current temperature from the temperature
sensor.
      </p>
<h2>The User Interface</h2>
      <p>
The original UI was written using jQuery mobile and a PHP backend for database
interaction.  The user has the capability of changing the current set point,
overriding the presence detection and associated programming, controlling the
heat/cool/off mode, and forcing the fan on.  So the set points are based on
whether the house is occupied.  Well, what if you have guests over and you
don’t want to register their phones with the system?  You can override the
program and have it act just like a regular old thermostat. Full source can be
found on my <a href="https://github.com/paullj1/pitherm">Github</a>.
      </p>
      <p>
In a later version of the application, I re-wrote the front-end using the
vue.js framework, and used a gun.js key-value store to do real-time pub/sub
updates.  This allowed for a much more rich user experience that would sync
across multiple clients in real-time.
      </p>`,
      images: [
        "pi-relay.jpg",
        "pi-wiring.jpg",
        "pi-screen-1.png",
        "pitherm-ng-sync.gif",
        "pitherm-ng-heat.gif",
        "pitherm-ng-cool.gif"
      ]
    },
    {
      title: "MyPersonalBudget",
      content: `<p>
Shortly after moving to Scott AFB, my wife and I realized a need for a
convenient way to track our spending.  I wanted an asynchronous way for us to
do that and of course I immediately thought of a database.  But how could I
convince my wife to learn SQL and then add her expenses using it?  So I
developed this little application for tracking expenses to help us stay
within our budget.
      </p><p>
So as I may have previously implied, this is a very simple web application.
It’s a sqlite database with a web-based user interface.  The front end is
written using jQuery mobile with a PHP backend to interact with the database.
I did build a little php authentication mechanism for this which I know isn’t
bulletproof, but it has stopped all of the automated attacks (so far).
      </p><p>
In 2016, I re-wrote the basic PHP/jquery application as a Ruby on Rails app.  I
host it locally today, and it's open for anyone else to use at <a
href='https://budget.paullj1.com/' target='_blank'>budget.paullj1.com</a>.
      </p>`,
      images: [
        "budget.png"
      ]
    },
    {
      title: "TTOCUI",
      content: `<p>
TTOCUI is a cross-platform user interface for a tire uniformity machine that I
wrote while working for CTI.  TTOC was a controller for a machine that would
test tires once they came off a production line.  My application was a user
interface which communicated with the controller over a TCP connection so that
it could be local to the machine or run remotely.
        </p> <p>
This applicataion was written primarily in C++ using the GTK+ framework
(gtkmm).  It used a TCP connection and a specialized protocol to communicate
with the controller written in C.  When I left CTI, the application compiled
and ran in Linux, Windows 7, and Mac OS X.  It was designed so that a machine
operator could use it on the local machine (which ran linux), and the plant
manager could remotely control and check status of the machine from his office
(on a computer running Windows).
        </p>
<h2>Challenges</h2><p>
I say primarily written in C++ because the embedded web browser and laser
applications were both written in C.  They take advantage of the GTK socket
feature.  I had to do this because embedding a web browser is not an easy task.
The only way we could do it was to use the deprecated gtkmozembed module which
had not been maintained since gtk2.  The work-around was to run a seperate
process using gtk2 and then connect the output of the display to the primary
process running with gtk3.
        </p>
        <iframe src="https://player.vimeo.com/video/81764628" width="500" height="414" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://player.vimeo.com/video/81764573" width="500" height="414" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <p>
Another problem I faced while developing this application was how to implement
the plotting feature.  The UI takes up to 8 streams of floating point integers
(double) and displays each on the same plane while each bound by different
parameters.  For example, the operator might need to visualize the air pressure
while simultaneously viewing the lateral load to determine if it’s forcing air
out of the tire as it is applied.  Well, the parameters for each of these
numbers is very different.  The operator would want to see the air pressure
between 29 and 31 PSI but the lateral load between 0 and 1200 lbs.  Sometimes a
video is better:
        </p>
        <iframe src="https://player.vimeo.com/video/81764387" width="500" height="414" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      `
    },
    {
      title: "WorkoutBuddy",
      content: `<p>
Workout Buddy was my senior design project in college.  I used it as an
opportunity to learn Objective-C and iOS development.  Workout Buddy was a diet
and exercise tracking application for iOS.  It was the first large project I
did on my own and serves as a reminder of how far I’ve come.
      </p><p>
This application was (as previously stated) my attempt at learning Objective-C.
I used the free Stanford iOS development class on iTunes University to learn
the fundamentals and then got to work.  It stored profile and information about
consumed foods in flat files locally.  Similar funcationlity is now available
in the popular MyFitnessPal app.  <a href="assets/files/workoutbuddy.pdf">Here's</a>
the report I wrote on the app. 
      </p>`,
      images: [
        "workoutbuddy-1.png",
        "workoutbuddy-2.png",
      ]
    }
  ]

  constructor(
    public popup: MatDialog,
    public sanitizer: DomSanitizer) { }

  bypass(text) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }

  openPopup(image) {
    this.popup.open(ImagePopup, {
      data: {
        src: `assets/img/${image}`
      }
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'image-popup',
  template: `
    <div mat-dialog-content>
      <div class='image-container'>
        <img src="{{data.src}}" />
      </div>
    </div>`,
  styles: [`
    div.image-container {
      padding: 30px;
    }`,`
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      max-width: 80%;
      max-height: 80%;
      object-fit: scale-down;
    }`
  ],
})
export class ImagePopup {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ImagePopupSource) {}
}

