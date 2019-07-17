import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherValuesComponent } from './wheather-values.component';

describe('WheatherValuesComponent', () => {
  let component: WheatherValuesComponent;
  let fixture: ComponentFixture<WheatherValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatherValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
