import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';

export interface Slider {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgClass, HammerModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  @Input() images: Slider[] = [];

  selectedIndex = 0;

  showPrev() {
    this.selectedIndex =
      this.selectedIndex > 0 ? this.selectedIndex - 1 : this.images.length - 1;
  }

  showNext() {
    this.selectedIndex =
      this.selectedIndex < this.images.length - 1 ? this.selectedIndex + 1 : 0;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.showNext();
    }, 5000);
  }
}
