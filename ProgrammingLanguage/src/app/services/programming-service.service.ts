import { Injectable } from '@angular/core';
import { CProgLanguages } from 'src/model/CProgLanguages';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProgrammingServiceService {

  languages: Observable<any[]>;
  detailsDoc: AngularFirestoreDocument<CProgLanguages>;
  details: Observable<any>;
  
  constructor(private afs: AngularFirestore) {
    this.languages = afs.collection('Languages').snapshotChanges().pipe(
      map(j => j.map(
      a => {
      const data = a.payload.doc.data() as CProgLanguages;
      const id = a.payload.doc.id;
      return {id, ...data};
      }
    ))
  );      
}

getPlayer(): Observable<CProgLanguages[]> {
  return this.languages;
}

getLanguage(id: string): Observable<CProgLanguages> {
    this.detailsDoc = this.afs.doc<CProgLanguages>(`Languages/${id}`);
    this.details = this.detailsDoc.valueChanges();
    return this.details;
  }

}
