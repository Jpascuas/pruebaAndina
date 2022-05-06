import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      precio: new FormControl('', [Validators.required, Validators.pattern('[0-9]*$')]),
      cantidad: new FormControl('', [Validators.required, Validators.pattern('[0-9]*$')]),
      imagen: new FormControl('', [Validators.required, Validators.pattern('^((?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?)\.(png|jpg|jpeg|gif|PNG|JPG|JPEG|GIF)$')]),
      observaciones: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      ciudades: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),

    });
  }

  // tslint:disable-next-line:typedef
  get f() { return this.form.controls; }

  // tslint:disable-next-line:typedef
  submit() {
    console.log(this.form.value);
    this.productosService.create(this.form.value).subscribe(res => {
        console.log('producto creado satisfactoriamente');
        this.router.navigateByUrl('productos/index');
      },
    );

  }

}
