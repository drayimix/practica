export interface ClienteI {
  id?: number;
  nombreCliente: string;
  apellidoCliente: string;
  direccionCliente: string;
  ciudadCliente: string;
  // estado: string;
  codigoPostal: string;
  correoCliente: string;
  telefonoCliente: string;
  createdAt?: Date;
  updateAt?: Date;
}
