import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  cursos: string[] = ['TypeScript', 'JavaScript', 'Java', 'C#'];

  habilitar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  altHabilitar(): void {
    this.habilitar = !this.habilitar;
  }

}
