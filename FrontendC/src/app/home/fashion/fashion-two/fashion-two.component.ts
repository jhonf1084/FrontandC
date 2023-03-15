import { Component, OnInit } from '@angular/core';
import { HomeSlider } from '../../../shared/data/slider';
import { Product } from '../../../shared/classes/product';
import { ProductService } from '../../../shared/services/product.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion-two',
  templateUrl: './fashion-two.component.html',
  styleUrls: ['./fashion-two.component.scss']
})
export class FashionTwoComponent implements OnInit {

  public themeLogo: string = 'assets/images/icon/logo-5.png'; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];
  active;

  constructor(public productService: ProductService,private router:Router, private http: HttpClient) {
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/pages/login"]);
    }
    
    this.productService.getProducts.subscribe(response => {
      this.products = response;
      this.productCollections = ["best sellers"];
    });
  }

  public HomeSliderConfig: any = HomeSlider;

  public sliders = [{
    title: '',
    subTitle: 'Hombres',
    path: '/shop/hombres',
    image: 'assets/images/slider/inicioHombre.jpg'
  },{
    title: '',
    subTitle: 'Mujeres',
    path: '/shop/mujeres',
    image: 'assets/images/slider/inicioMujer.jpg'
  }]
  

  // Collection banner
  public collections1 = [];

  public collections2 = [];

  ngOnInit(): void {
   /*  this.http.get<any>('http://localhost:8080/producto/genero/femenino').subscribe(
      this.products = data
    ) */
  }



  // Product Tab collection
  getProducts() {

    return this.products;
  }

}
