import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductosService } from '../productos.service';
import { Productos } from "../productos";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  productos: Productos;
  form: FormGroup;

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idProductos'];
    this.productosService.find(this.id).subscribe((data: Productos) => {
      this.productos = data;
      console.log(this.productos);
    });

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      precio: new FormControl('', [Validators.required, Validators.pattern('[0-9]*$')]),
      cantidad: new FormControl('', [Validators.required, Validators.pattern('[0-9]*$')]),
      imagen: new FormControl('', [Validators.required, Validators.pattern('^((?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?)\.(png|jpg|jpeg|gif|PNG|JPG|JPEG|GIF)$')]),
      observaciones: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      ciudades: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),

    });

  }
  get f() { return this.form.controls; }

  submit(){
    console.log(this.form.value);
    this.productosService.update(this.id, this.form.value).subscribe(res => {
      console.log('Producto actualizado');
      this.router.navigateByUrl('productos/index');
    })
  }

}
