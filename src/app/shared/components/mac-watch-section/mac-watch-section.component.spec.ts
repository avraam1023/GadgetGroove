import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacWatchSectionComponent } from './mac-watch-section.component';

describe('MacWatchSectionComponent', () => {
  let component: MacWatchSectionComponent;
  let fixture: ComponentFixture<MacWatchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacWatchSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacWatchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
