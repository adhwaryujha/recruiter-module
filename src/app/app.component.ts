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
      this.fetchCandidateDetails;
      this.fetchCandidateDetails;
      this.activeQuestionIndex = 0;
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
          { videoURL: "", comment: "", rating: 0},
          { videoURL: "", comment: "", rating: 0},
          { videoURL: "", comment: "", rating: 0},
          { videoURL: "", comment: "", rating: 0},
          { videoURL: "", comment: "", rating: 0}
        ];
    }

    changeActiveQuestion(newIndex: number): void {
      this.activeQuestionIndex = newIndex;
    }

    

}
