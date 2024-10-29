import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  userForm: FormGroup = new FormGroup({}); //variavel para armazenar o formulário

  constructor(private fb: FormBuilder) {}

  // função para inicializar o componente
  ngOnInit(): void {
    this.initilizeForm();//inicializa o formulário
  }

  // função para inicializar o formulário
  initilizeForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(9)],],
    });
  }

  // função para enviar o formulário
  submitForm() {
    if(this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

}
