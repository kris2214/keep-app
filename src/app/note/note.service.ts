import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoteService {
  constructor(private http:HttpClient) { }
  getNotes():Observable<Note[]> {
    return this.http.get<Note[]>('http://localhost:3000/notes');
  }
 
  addNote(note:Note):Observable<Note> {
     return this.http.post<Note>('http://localhost:3000/notes', note);
  }
}
