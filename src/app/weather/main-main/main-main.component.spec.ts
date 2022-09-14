import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainMainComponent} from './main-main.component';

describe('MainMainComponent', () => {
  let component: MainMainComponent;
  let fixture: ComponentFixture<MainMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainMainComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
