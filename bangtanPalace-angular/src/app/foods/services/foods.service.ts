import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() {
     /*empty*/
}

  list(){
    return [{ _id: '1',
     title: "Sushi",
     image: 'https://classic.exame.com/wp-content/uploads/2017/05/sushi.jpg?quality=70&strip=info&w=1024',
     price: "39,99"
      }
    ];
  }
}
