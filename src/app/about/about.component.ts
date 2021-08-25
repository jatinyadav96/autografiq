import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showBranding: boolean = false;
  showMotionGraphics: boolean = false;
  showSocialMediaAssets: boolean = false;
  showUIDesign: boolean = false;
  contentContainer: string = 'hide';


  open(tag: string) {
    console.log('open' + tag);
    switch (tag) {
      case 'Branding':
        this.showBranding = true;
        break;
      case 'MotionGraphics':
        this.showMotionGraphics = true;
        break;
      case 'SocialMediaAssets':
        this.showSocialMediaAssets = true;
        break;
      case 'UIDesign':
        this.showUIDesign = true;
        break;
    }
    this.contentContainer = 'show';
  }
  close(tag: string) {
    switch (tag) {
      case 'Branding':
        this.showBranding = false;
        break;
      case 'MotionGraphics':
        this.showMotionGraphics = false;
        break;
      case 'SocialMediaAssets':
        this.showSocialMediaAssets = false;
        break;
      case 'UIDesign':
        this.showUIDesign = false;
        break;
    }
    this.contentContainer = 'hide';
  }
}
