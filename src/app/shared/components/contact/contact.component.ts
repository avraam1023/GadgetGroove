import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  stores = [
    {
      name: 'Online Shop',
      days: 'Mon - Sun',
      hours: '10:00 - 22:00',
      phone: '+995 322 23 53 23',
    },
    {
      name: 'City Mall',
      days: 'Mon - Sun',
      hours: '10:00 - 22:00',
      phone: '+995 322 23 53 23',
    },
    {
      name: 'Tsintsadze',
      days: 'Mon - Sun',
      hours: '10:00 - 22:00',
      phone: '+995 322 23 53 23',
    },
    {
      name: 'Galleria Tbilisi',
      days: 'Mon - Sun',
      hours: '10:00 - 22:00',
      phone: '+995 322 23 53 23',
    },
    {
      name: 'Tbilisi Mall',
      days: 'Mon - Sun',
      hours: '10:00 - 22:00',
      phone: '+995 322 23 53 23',
    },
    {
      name: 'East Point',
      days: 'Mon - Sun',
      hours: '10:00 - 22:00',
      phone: '+995 322 23 53 23',
    },
  ];
}
