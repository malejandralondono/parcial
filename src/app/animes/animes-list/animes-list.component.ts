import { Component, OnInit } from '@angular/core';
import { Animes } from '../animes';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {
  
  animes: Array<Animes> = [];

  constructor() { }

  ngOnInit() {
  }

}
