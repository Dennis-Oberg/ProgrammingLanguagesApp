import { Injectable } from '@angular/core';
import { CProgLanguages } from 'src/model/CProgLanguages';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProgrammingServiceService {

  languages: Observable<any[]>;
  
  constructor(private afs: AngularFirestore) {
    this.languages = afs.collection('Languages').valueChanges();
}
getLanguage(): Observable<CProgLanguages[]> {
  return this.languages;
}

}
