import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';
import { NoteService} from './note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {
  note:Note = new Note();
  notesArr:Note[] = [];
  constructor(private noteService:NoteService) { }

  ngOnInit() {
      this.noteService.getNotes().subscribe(
        notes => this.notesArr = notes
      )
  }
  addNote() {
    this.noteService.addNote(this.note).subscribe(
      note => this.notesArr.push(note)
    );
  }
}