import { Component } from '@angular/core';
import { SongService } from '../../../services/song.service';
import { debounce } from 'lodash-es'; 

@Component({
  selector: 'tunes-search-form',
  templateUrl: './tunes-search-form.component.html',
  styleUrls: ['./tunes-search-form.component.scss']
})
export class TunesSearchFormComponent {
  constructor( private songService: SongService) {}
  ngOnInit(): void{}

  getMusic(query: string): void {
    this.songService.getSongs(query)
    event?.preventDefault()
  }

  search= debounce((query: string): void => {
    this.getMusic(query)
  }, 500)
}
