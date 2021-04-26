import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  price: number;
  months: number;
  down: number;
  loan: number;
  monthly: number;
  interest: number;
  
  
  calculateDown(){
    this.down = this.price * 0.40;
    this.down = parseFloat(this.down.toFixed(2));
  }

  calculateLoan(){
    this.loan = this.price - this.down;
    this.loan = parseFloat(this.loan.toFixed(2));
  }

  calculateInterest (){
    this.interest = (this.loan * (3.90/100)) * this.months;
  }

  calculateMonthly (){
    this.monthly = (this.loan + this.interest) / this.months;
  }
  constructor(public navCtrl: NavController) {}
}