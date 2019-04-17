import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTextToSpeechComponent } from './google-text-to-speech.component';

describe('GoogleTextToSpeechComponent', () => {
  let component: GoogleTextToSpeechComponent;
  let fixture: ComponentFixture<GoogleTextToSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleTextToSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleTextToSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
