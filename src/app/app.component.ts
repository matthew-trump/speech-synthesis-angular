import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Speech Synthesis Demo';

  routes: any[] = [
    {
      route: [''],
      label: "Home"
    },
    {
      route: ['google-text-to-speech'],
      label: "Google TTS"
    }
  ]
}
