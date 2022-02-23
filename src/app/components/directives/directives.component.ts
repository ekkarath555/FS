import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  students = [
    {
      name: 'Stark',
      email: 'stark_industries@gmail.com',
      major: 'Cs',
      year: 'Third',
    },
    {
      name: 'Jewwii',
      email: 'jewwii@gmail.com',
      major: 'Cs',
      year: 'Third',
    },
    {
      name: 'Daniel',
      email: 'daniel@gmail.com',
      major: 'Ma',
      year: 'Third',
    },
    {
      name: 'Notto',
      email: 'notto@gmail.com',
      major: 'Ic',
      year: 'Third',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
