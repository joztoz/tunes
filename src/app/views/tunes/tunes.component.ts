import { Component } from '@angular/core';

@Component({
  selector: 'app-tunes',
//  templateUrl: './tunes.component.html',
  styleUrls: ['./tunes.component.scss'],
  template: `
  <div class="tunes">
    <h1>Tunes</h1>
    <tunes-search-form></tunes-search-form>
    <tunes-list></tunes-list>
  </div>

  `
})
export class TunesComponent {
  constructor() {}
  
}
