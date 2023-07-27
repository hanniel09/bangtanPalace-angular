import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  cartItems = [
    {
      name: 'Sushi',
      price: 39.99,
      description: 'Amount: 1',
      imageUrl: 'https://bangtanpalacedatas.s3.sa-east-1.amazonaws.com/sushi.jpg'
    },
    // Add more items as needed
  ];

  removeItemFromCart(item: any) {
    // Implement the logic to remove the item from the cart
    console.log('Removing item:', item);
  }
}
