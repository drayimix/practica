import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteI } from 'src/app/models/cliente';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit{
  public id: number=0;
  public form: FormGroup=this.formBuilder.group({
    id: [''],
    nombreCliente: ['', [Validators.required]],
    apellidoCliente: ['', [Validators.required]],
    direccionCliente: ['', [Validators.required]],
    ciudadCliente: ['', [Validators.required]],
    codigoPostal: ['', [Validators.required]],
    correoCliente: ['', [Validators.required]],
    telefonoCliente: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCliente(this.id);
  }

  getCliente(id: number){
    this.clienteService.getOneCliente(id).subscribe({next: (data)=>{
      this.form.setValue(data.cliente)
    }})
  }

  onSubmit(){
    const formValue: ClienteI = this.form.value;
    const id: number = this.form.value.id;
    this.clienteService.updateCliente(id, formValue).subscribe(()=>{
      setTimeout(()=>{
        this.messageService.add({severity: 'success', summary: 'Notificacion',detail: 'Cliente Actualizado', life:5000});
      }, 0);
      this.router.navigateByUrl('clientes');
    })
  }

  cancel() {
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
