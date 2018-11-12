import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustZipcodeComponent } from './just-zipcode.component';

describe('JustZipcodeComponent', () => {
  let component: JustZipcodeComponent;
  let fixture: ComponentFixture<JustZipcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustZipcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
