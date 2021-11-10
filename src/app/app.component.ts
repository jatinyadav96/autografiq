import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'autografiq';
  isHome: string = 'hide';
  isAbout: string = 'hide';
  isInside: string = 'hide';
  isContact: string = 'hide';
  constructor(private router: Router) { }

  async mouseEnter(link: string) {
    console.log('/' + link);
    switch (link) {
      case 'home':
        this.isHome = 'show';
        break;
      case 'about':
        this.isAbout = 'show';
        break;
      case 'inside':
        this.isInside = 'show';
        break;
      case 'contact':
        this.isContact = 'show';
        break;
    }
    // await this.doNothing();
    // this.router.navigate(['/' + link]); // For: enable hover link change
  }
  doNothing() {
    return new Promise((res) => setTimeout(res, 500));
  }

  mouseLeave() {
    this.isHome = 'hide';
    this.isAbout = 'hide';
    this.isInside = 'hide';
    this.isContact = 'hide';
  }
}
