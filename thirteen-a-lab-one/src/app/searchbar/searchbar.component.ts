import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent  {
 
  values = '';

  searchproduct = [
    { product_name: 'harry potter', product_price:'125' },
    { product_name: 'salayer', product_price: '500' }
  ];

  searchproductFiltered = this.searchproduct;

  onKey(event: KeyboardEvent) { // with type info

    const filterValue = (<HTMLInputElement>event.target).value;

    if (!filterValue) {
      this.searchproductFiltered = this.searchproduct;
      return;
    }

    this.searchproductFiltered = this.searchproduct.filter(product => {
      return product.product_name.includes(filterValue);
    });

  }
}


