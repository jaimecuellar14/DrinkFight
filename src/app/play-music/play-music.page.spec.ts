import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMusicPage } from './play-music.page';

describe('PlayMusicPage', () => {
  let component: PlayMusicPage;
  let fixture: ComponentFixture<PlayMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayMusicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
