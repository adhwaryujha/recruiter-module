import { Component } from '@angular/core';
import { Recruiter } from './models/recruiter';
import { Answer } from './models/answer';
import { Candidate } from './models/candidate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    user: Recruiter;
    answers: Answer[];
    candidate: Candidate;

    activeQuestionIndex: number;

    constructor() {
      this.fetchUserDetails();
      this.fetchCandidateDetails();
      this.fetchAnswers();
      this.activeQuestionIndex = 0;
      console.warn("answers", this.answers);
    }

    fetchUserDetails(): void {
      this.user =
        { name: "Harvey Dent"
        , imageURL: "../assets/recruiter.png"
        };
    }

    fetchCandidateDetails(): void {
      this.candidate =
        { name: "Mike Ross"
        , imageUrl: "../../assets/candidate.png"
        };
    }

    fetchAnswers(): void {
      this.answers =
        [
          { videoURL: "", comment: "", rating: 0, question: "question one"},
          { videoURL: "", comment: "", rating: 0, question: "question two"},
          { videoURL: "", comment: "", rating: 0, question: "question three"},
          { videoURL: "", comment: "", rating: 0, question: "question four"},
          { videoURL: "", comment: "", rating: 0, question: "question five"}
        ];
    }

    changeActiveQuestion(newIndex: number): void {
      this.activeQuestionIndex = newIndex;
    }



}
