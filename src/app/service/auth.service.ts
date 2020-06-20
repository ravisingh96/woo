import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  url = 'https://shop.patnabeats.com';
  consumerKey = 'ck_77af28ccd6278e16fcaa932675fe6638fa2c0ab8';
  consumerSecret = 'cs_f9e2bd957526683514666c2e553bff86f9b4874b';
  
  getProducts() {
    return `${this.url}/wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`;
  }

  // getProduct(pid) {
  //   return new Promise(resolve => {
  //     this.http
  //       .get(
  //         `${this.url}/wp-json/wc/v3/products/${pid}?consumer_key=${
  //           this.consumerKey
  //         }&consumer_secret=${this.consumerSecret}`
  //       )
  //       .subscribe(productData => {
  //         resolve(productData);
  //       });
  //   });
  // }


}
