import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/anim/Autografiq.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
  };
  constructor() { }

  ngOnInit(): void {
  }

  getRandom() {
    return 'cubeUpDownOdd ' + this.getRandomInt(3, 10) + 's ease infinite 300ms';
  }
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  slides = [
    { img: "../../assets/s1.png" },
    { img: "../../assets/s2.png" },
    { img: "../../assets/s3.png" },
    { img: "../../assets/s4.png" },
    { img: "../../assets/s5.png" },
    { img: "../../assets/s6.png" },
    { img: "../../assets/s7.png" },
    { img: "../../assets/s8.png" },
    { img: "../../assets/s9.png" },
    { img: "../../assets/s10.png" },
  ];
  slickConfig: any = {
    infinite: true,
    // slidesToShow: 4,
    // slidesToScroll: 2,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    // centerPadding: '250px',
    // accessibility: true,
    // touchMove: true,
    // arrows: true,
    // fade: true
    // centerMode: true,
    // centerPadding: '100px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
