import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bangtanPalace';

  constructor(private router: Router,
    private route: ActivatedRoute){
  }

  ngOnInit(): void {

  }

  myCart(){
     this.router.navigate(['myCart'], {relativeTo: this.route})
  }
}
