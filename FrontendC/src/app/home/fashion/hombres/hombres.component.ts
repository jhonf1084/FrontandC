import { Component, OnInit } from '@angular/core';
import { HomeSlider } from '../../../shared/data/slider';
import { Product } from '../../../shared/classes/product';
import { ProductService } from '../../../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hombres',
  templateUrl: './hombres.component.html',
  styleUrls: ['./hombres.component.scss']
})
export class HombresComponent implements OnInit {

  public themeLogo: string = 'assets/images/icon/logo-5.png'; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];
  active;

  constructor(public productService: ProductService, private router: Router) {
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/pages/login"]);
    }

    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'fashion');
      // Get Product Collection
      this.products.filter((item, i) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  public HomeSliderConfig: any = HomeSlider;

  public sliders = [{
    title: '',
    subTitle: 'Hombre',
    path: '/home/hombres',
    image: 'assets/images/slider/inicioHombre.jpg'
  }, {
    title: '',
    subTitle: 'Mujeres',
    path: '/home/mujeres',
    image: 'assets/images/slider/inicioMujer.jpg'
  }]

  // Collection banner
  public collections1 = [];

  public collections2 = [];

  ngOnInit(): void {
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }

}
