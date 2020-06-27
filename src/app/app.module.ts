import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { AnswerGraderComponent } from './answer-grader/answer-grader.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailsComponent,
    AnswerGraderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
