import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@Angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog } from '@angular/material/dialog';
import { AddlanguagedialogComponent } from '../addlanguagedialog/addlanguagedialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {
  
  durationInSeconds = 5;
  language: any;
  Name: String;

  form = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Founder: new FormControl('', [Validators.required]),
    Founded: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]),
    Description: new FormControl('', [Validators.required])
  });

  constructor(private firestore: AngularFirestore, private snackBar: MatSnackBar, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

  }
  openDialog() {
    const dialogRef = this.dialog.open(AddlanguagedialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.onSubmit();
       
      } else{
        this.errorDialogInput();
        
      }
    
    });
  }

  errorDialogInput(){
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000
    }); 
  }

  navigate(){
    this.router.navigate(['/Programming-Languages' ]);  
  }

  verifyInput(): boolean{
    if(this.form.valid){
      return true;
    }
  }

  onSubmit() {
    if (this.verifyInput()) {
      this.firestore.collection('Languages').add({
        Name: this.form.value.Name,
        Founder: this.form.value.Founder,
        Founded: this.form.value.Founded,
        Description: this.form.value.Description
      })
        .then(res => {
          console.log(res);
          this.form.reset();
          this.navigate();
         
        })
        .catch(e => {
          console.log(e);
          this.form.reset();
        })
    }
  }
}


@Component({
  selector:'snackbar',
  templateUrl:'snackbar.html',
  styles: [`
  .snackbar-error {
    color: hotpink;
  }
`],
})
export class SnackBarComponent{

}
