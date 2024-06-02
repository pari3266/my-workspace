import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisaTestComponent } from './parisa-test.component';

describe('ParisaTestComponent', () => {
  let component: ParisaTestComponent;
  let fixture: ComponentFixture<ParisaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParisaTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParisaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
