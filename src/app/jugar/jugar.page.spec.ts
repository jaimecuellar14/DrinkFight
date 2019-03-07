import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugarPage } from './jugar.page';

describe('JugarPage', () => {
  let component: JugarPage;
  let fixture: ComponentFixture<JugarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
