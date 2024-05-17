import { Component, OnInit } from '@angular/core';
import { Animes } from '../animes';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {
  
  animes: Array<Animes> = [];

  constructor(private animesService: AnimesService) { }

 getAnimes(): void {
   this.animesService.getAnimes().subscribe((animes) => {
     this.animes = animes;
   });
 }

 ngOnInit() {
   this.getAnimes();
 }

}