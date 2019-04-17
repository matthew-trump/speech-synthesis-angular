import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleTextToSpeechComponent } from './google-text-to-speech/google-text-to-speech.component';

const routes: Routes = [
  { path: 'google-text-to-speech', pathMatch: 'full', component: GoogleTextToSpeechComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
