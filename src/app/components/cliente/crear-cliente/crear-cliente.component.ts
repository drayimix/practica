import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteI } from 'src/app/models/cliente';
import { MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit{
  public form:FormGroup = this.formBuilder.group({
    nombreCliente: ['', [Validators.required]],
    apellidoCliente: ['', [Validators.required]],
    direccionCliente: ['', [Validators.required]],
    ciudadCliente: ['', [Validators.required]],
    codigoPostal: ['', [Validators.required]],
    correoCliente: ['', [Validators.required]],
    telefonoCliente: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,
    private router:Router
  ) {

  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: ClienteI = this.form.value;
    console.log(formValue);
    this.clienteService.createCliente(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'Cliente Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('clientes');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/clientes');
  }

  get nombreCliente() { return this.form.get('nombreCliente'); }
  get apellidoCliente() { return this.form.get('apellidoCliente'); }
  get direccionCliente() { return this.form.get('direccionCliente'); }
  get ciudadCliente() { return this.form.get('ciudadCliente'); }
  get codigoPostal() { return this.form.get('codigoPostal'); }
  get correoCliente() { return this.form.get('correoCliente'); }
  get telefonoCliente() { return this.form.get('telefonoCliente'); }



}
