import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
Sname:string
Sage:number
Sdob;
Semail;
Sstate:string
  constructor() { }

  ngOnInit() {
  }

}
