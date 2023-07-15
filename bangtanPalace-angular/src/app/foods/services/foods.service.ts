import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../model/food';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  private readonly API = 'cardapio';

  constructor(private httpClient: HttpClient) {
     /*empty*/
}

  loadById(id: string){
    return this.httpClient.get<Food>(`${this.API}/${id}`);
  }
  

  list(){
    return [{ _id: '1',
     title: "Sushi",
     image: 'https://classic.exame.com/wp-content/uploads/2017/05/sushi.jpg?quality=70&strip=info&w=1024',
     price: "39,99"
      }
    ];
  }

  save(record: Partial<Food>){
    if(record._id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Food>){
    return this.httpClient.post<Food>(this.API, record).pipe(first());
  }

  private update(record: Partial<Food>){
    return this.httpClient.put<Food>(`${this.API}/${record._id}`, record).pipe(first());
  }

}
