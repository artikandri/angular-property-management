import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  earnings : number = 2345.67;
  earningsString : String = "2,345";
  earningsDecimal : number = 67;

  ngOnInit(): void {
    this.earningsString = parseInt(this.earnings.toString()).toLocaleString('de')
    this.earningsDecimal = parseInt(((this.earnings - Math.floor(this.earnings))*100).toString());
  }

}
