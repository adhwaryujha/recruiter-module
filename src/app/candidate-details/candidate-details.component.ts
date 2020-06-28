import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../models/candidate';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  @Input() candidateDetails : Candidate;

  constructor() { }

  ngOnInit(): void {
  }

}
