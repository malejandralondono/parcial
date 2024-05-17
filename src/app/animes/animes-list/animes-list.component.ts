import { Component, OnInit } from '@angular/core';
import { Animes } from '../animes';
import { AnimesService } from '../animes.service';
import { AnimesDetail } from '../animes-detail/animes-detail';




@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {
  
  animes: Array<Animes> = [];
  selected: Boolean = false;
  selectedAnime!: AnimeDetail;

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