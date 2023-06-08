export interface ProductoI {
  id?: number;
  nombreProducto: string;
  descripcionProducto: string;
  precioProducto: string;
  stockProducto: number;
  createdAt?: Date;
  updateAt?: Date;
  categoriaId: number;
}
