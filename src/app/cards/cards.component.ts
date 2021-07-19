import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 
  cardArray = ['card1','card2','card3','card4']
   
  constructor() { }


  @Output()notify:EventEmitter<any>= new EventEmitter<any>();


  passData(){
    this.notify.emit( this.cardArray )
    
  }

  ngOnInit(): void {
   
  }

 
 

               
}
