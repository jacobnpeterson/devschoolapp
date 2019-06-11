import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRowSmallComponent } from './person-row-small.component';

describe('PersonRowSmallComponent', () => {
  let component: PersonRowSmallComponent;
  let fixture: ComponentFixture<PersonRowSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRowSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRowSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
