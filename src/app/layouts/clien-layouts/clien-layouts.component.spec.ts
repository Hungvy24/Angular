import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienLayoutsComponent } from './clien-layouts.component';

describe('ClienLayoutsComponent', () => {
  let component: ClienLayoutsComponent;
  let fixture: ComponentFixture<ClienLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
