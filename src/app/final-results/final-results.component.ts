import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Answer } from '../models/answer';

export interface TableDataSource {
  serial: number,
  question: string,
  grade: number,
  comment: string
}

@Component({
  selector: 'app-final-results',
  templateUrl: './final-results.component.html',
  styleUrls: ['./final-results.component.css']
})
export class FinalResultsComponent implements OnInit, OnChanges {
  @Input() allAnswers : Answer[];

  displayedColumns: string[] = ['serial', 'question', 'grade', 'comment'];
  dataSource: TableDataSource[];
  tableLoaded: boolean;

  constructor() {
    this.tableLoaded = false;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.warn("input: ", this.allAnswers);
    this.generateTableSource();
  }

  generateTableSource(): void {
    this.dataSource = [];
    for(let index=0; index<this.allAnswers.length; index++){
      this.dataSource.push({
        serial: index+1,
        question: this.allAnswers[index].question,
        grade: this.allAnswers[index].rating,
        comment: this.allAnswers[index].comment
      });
    }
    console.warn("data source: ", this.dataSource);
    this.tableLoaded = true;
  }

}
