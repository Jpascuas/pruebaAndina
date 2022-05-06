import { Component, OnInit } from '@angular/core';

import { ProductosService} from '../productos.service';
import { Productos } from '../productos';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productos: Productos[] = [];

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getALL().subscribe((data: Productos[]) => {
      this.productos = data;
      console.log(this.productos);
    });
  }
  // tslint:disable-next-line:typedef
  deleteProductos(id){
    this.productosService.delete(id).subscribe(res => {
      this.productos = this.productos.filter(item => item.id !== id);
      console.log('Producto eliminado');
    });
  }

}
