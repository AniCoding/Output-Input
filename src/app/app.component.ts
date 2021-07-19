import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardData: any =[]
  addCard(data:any){
    if (this.cardData.length<10){
          this.cardData=data }
  }

  removeAll() {
    
    this.cardData=[]
    
    }
}


