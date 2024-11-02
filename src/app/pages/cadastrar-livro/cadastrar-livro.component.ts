import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrl: './cadastrar-livro.component.css'
})
export class CadastrarLivroComponent implements OnInit {
  showImpresso: boolean = false;
  showEletronico: boolean = false;
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm() {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      editora: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      frete: [''],
      estoque: [''],
      tamanho: [''],
    })
  }

  toggleImpresso() {
    this.showImpresso = !this.showImpresso;
    if(this.showImpresso) {
      this.form.get('frete')?.setValidators([Validators.required]);
      this.form.get('estoque')?.setValidators([Validators.required]);
    }else{
      this.form.get('frete')?.clearValidators();
      this.form.get('estoque')?.clearValidators();
    }

    this.form.get('frete')?.updateValueAndValidity();
    this.form.get('estoque')?.updateValueAndValidity();
  }

  toggleEletronico() {
    this.showEletronico = !this.showEletronico;
    if(this.showEletronico) {
      this.form.get('tamanho')?.setValidators([Validators.required]);
    }else{
      this.form.get('tamanho')?.clearValidators();
    }

    this.form.get('tamanho')?.updateValueAndValidity();
  }

  cadastrar(){
      console.log(this.form.value);
  }

}
