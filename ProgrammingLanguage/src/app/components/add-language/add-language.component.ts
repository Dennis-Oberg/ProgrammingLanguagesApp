import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@Angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";




@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  langForm: FormGroup;
  language: any;

  Name: String;

  form = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Founder: new FormControl('', [Validators.required]),
    Founded: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
    Description: new FormControl('', [Validators.required])
  });

  constructor(private firestore: AngularFirestore, private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  verifyDigits(input): boolean { //Kollar så att årinparameter bara innehåller siffror
    let counter = 0;
    for (var i = 0; i < input.length; i++) {
      if (parseInt(input.charAt(i))) {
        counter++;
      }
    }
    return counter === input.length;
  }



  onSubmit() {
    if (this.verifyDigits(this.form.value.Founded)) {
      this.firestore.collection('Languages').add({
        Name: this.form.value.Name,
        Founder: this.form.value.Founder,
        Founded: this.form.value.Founded,
        Description: this.form.value.Description
      })
        .then(res => {
          console.log(res);
          this.form.reset();
        })
        .catch(e => {
          console.log(e);
        })
    }
    else {
      alert("Year can only contain digits");
    }
  }
}
