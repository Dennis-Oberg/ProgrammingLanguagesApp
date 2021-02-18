import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from "@Angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";



@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  langForm: FormGroup;
  language: any;

  form = new FormGroup({
    Name: new FormControl(''),
    Founder: new FormControl(''),
    Founded: new FormControl(),
    Description: new FormControl('')
});
  constructor(private firestore: AngularFirestore, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.firestore.collection('Languages').add({
      Name: this.form.value.Name
      
  })
  .then(res => {
      console.log(res);
      this.form.reset();
  })
  .catch(e => {
      console.log(e);
  })
  }


}
