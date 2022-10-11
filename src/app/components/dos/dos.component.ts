import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {


  public formularioLogin!: FormGroup;


  constructor() { } //private formGroup: FormGroup, private formControl: FormControl

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      name: new FormControl('', [Validators.maxLength(10), Validators.minLength(5), Validators.required]),
      email:new FormControl('', [Validators.required] ),
      password: new FormControl('',[Validators.required]),      
      telefono: new FormControl('',[Validators.pattern("^[0-9]*$"), Validators.required]),   
    }); 
  }


  onsubmit(){
    this.formularioLogin.markAsDirty();
    this.formularioLogin.markAllAsTouched();

    this.markAllAsDirty();
    
    console.log(this.formularioLogin);
    console.log(this.formularioLogin.get('')?.value);
    console.log(this.formularioLogin.get('')?.value);
    console.log(this.formularioLogin.get('')?.value);



    if(this.formularioLogin.invalid){
    return ;
    }


    // enviar datos hacia el servidor

  }
  markAllAsDirty(){
      this.formularioLogin.get("name")?.markAsDirty();
      this.formularioLogin.get("email")?.markAsDirty();
      this.formularioLogin.get("password")?.markAsDirty();
      this.formularioLogin.get("telefono")?.markAsDirty();
  }

}
