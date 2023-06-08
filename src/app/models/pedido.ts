export interface PedidoI{
  id?: number;
  fechaPedido: string;
  cantidadPedido: number;
  valorPedido: number;
  createdAt?: Date;
  updateAt?: Date;
  clienteId: number;
  productoId: number;
}
