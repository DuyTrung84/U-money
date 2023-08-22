import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  isQuestionOpen: boolean = false;

  toggleMenu() {
    this.isQuestionOpen = !this.isQuestionOpen;
  }
  ngOnInit(): void {
  }

}
