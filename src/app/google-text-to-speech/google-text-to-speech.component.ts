import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WindowRefService } from './window-ref.service';
import { environment } from 'src/environments/environment'
//const ssml1 = '<speak><par><media begin="2.0s"><audio src="https://storage.googleapis.com/hqu-alpha.appspot.com/scott-intro-3.mp3"/></media><media soundLevel="-10dB"><audio src="https://storage.googleapis.com/hqu-alpha.appspot.com/game-intro-music.mp3"/></media></par></speak>';   
//const ssml  = "<speak>Moving on to Question 2. <break time='1000ms'/> Which of these rivers crosses the Painted Desert? <break time='800ms'/> your choices are <break time='500ms'/> Gila,<break time='400ms'/>Salt,<break time='400ms'/>or Little Colorado</speak>";

const BACKEND_URL: string = environment.backendUrl;
const GOOGLE_TEXT_TO_SPEECH_PATH: string = environment.googleTextToSpeechPath;

@Component({
  selector: 'app-google-text-to-speech',
  templateUrl: './google-text-to-speech.component.html',
  styleUrls: ['./google-text-to-speech.component.scss']
})
export class GoogleTextToSpeechComponent implements OnInit {

  public audio: HTMLAudioElement;
  public processing = false;
  constructor(private httpClient: HttpClient, private windowRefService: WindowRefService) { }

  ngOnInit() {
  }
  send(text) {

    if (text) {
      this.processing = true;
      const trimmed = text.trim();
      const isSsml = trimmed.length > 7 && trimmed.substring(0, 7) === '<speak>';
      console.log("SSML", isSsml, text);
      const input = isSsml ? { ssml: text } : { text: text };

      const ttsRequest = {
        input: input,
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
      };
      const url = BACKEND_URL + GOOGLE_TEXT_TO_SPEECH_PATH;
      console.log("SENDING REQUEST", url, ttsRequest);
      /** 
      setTimeout(() => {
        this.processing = false;
      }, 3000); 
      */
      this.httpClient.post(BACKEND_URL + GOOGLE_TEXT_TO_SPEECH_PATH, { request: ttsRequest })
        .toPromise()
        .then((result: any) => {
          console.log("RESULT", result)
          this.processing = false;
          if (result && result.url) {
            const url = result.url;

            this.audio = new Audio();
            const audio = this.audio;
            audio.src = url;
            audio.load();
            audio.play();
            audio.onended = () => { }
          }
        }).catch(err => {
          this.processing = false;
          console.log('TTS ERROR', err)
        });


    }
  }

}
