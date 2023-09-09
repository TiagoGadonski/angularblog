import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: 's649y427o9qx',
    accessToken: 'FXGL96jQX8RzShnQAbetzkzlkKM_ke8euqjWaR-itPw'
  });

  getAllEntries(){
    const promise = this.client.getEntries()
    return from (promise);
  }

  getEntryById(id: string){
    const promise = this.client.getEntry(id);
    return from (promise);
  }
}
