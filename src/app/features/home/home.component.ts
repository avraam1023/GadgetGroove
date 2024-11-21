import { Component } from '@angular/core';
import { MacWatchSectionComponent } from '../../shared/components/mac-watch-section/mac-watch-section.component';
import {
  Slider,
  SliderComponent,
} from '../../shared/components/slider/slider.component';
import { data } from '../../data';
import { NewProductsComponent } from '../../shared/components/new-products/new-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MacWatchSectionComponent, SliderComponent, NewProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  sliderData: Slider[] = data;
}
