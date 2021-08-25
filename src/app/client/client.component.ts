import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  constructor() {}

  public activeSlideIndex: any = 0;
  public dots: string[] = ['is-selected', '', ''];

  @ViewChild('carousel', { static: false }) carousel: any;

  ngOnInit(): void {}
  goto(goOn: number) {
    this.carousel.selectSlide(goOn);
  }
  activeSlideChange() {
    console.log(this.activeSlideIndex.relatedTarget);
    for (let i = 0; i < this.dots.length; i++) {
      if (this.activeSlideIndex.relatedTarget == i)
        this.dots[i] = 'is-selected';
      else this.dots[i] = '';
    }
  }
  prev() {
    this.carousel.previousSlide();
  }
  next() {
    this.carousel.nextSlide();
  }
}
