import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForimgComponent } from './forimg.component';

describe('ForimgComponent', () => {
  let component: ForimgComponent;
  let fixture: ComponentFixture<ForimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
