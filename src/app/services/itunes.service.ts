import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class iTunesService {

  private limit = "5"
  private url: string = `
  https://itunes.apple.com/search
  ?term=%QUERY%
  &entity=musicTrack
  &limit=%LIMIT%
  `


  constructor(private httpClient: HttpClient) { }

  getData(query:string){
    const url: string = this.url
    .replace('%QUERY%', encodeURI(query))
    .replace('%LIMIT%', (this.limit))
    .replace(/\s/g, '')
    return this.sendRequest(url)
  }
  
  sendRequest(url: any){
    return this.httpClient.get(url)
  }

}