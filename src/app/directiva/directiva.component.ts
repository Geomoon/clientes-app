import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  cursos: string[] = ['TypeScript', 'JavaScript', 'Java', 'C#'];

  constructor() { }

  ngOnInit(): void {
  }

}
