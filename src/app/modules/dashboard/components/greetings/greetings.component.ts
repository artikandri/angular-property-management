import { Component, OnInit } from '@angular/core';
import { getTodayGreeting } from 'src/app/utils/datetime';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent  implements OnInit{
  dropdownProps : any = {'dropdownText': 'This week', type: 'default', 'dropdownItems': [{'text': 'This week'}, {'text': 'This month'}, {'text': 'This year'}]}
  greeting: String = "Morning";

  ngOnInit(): void {
    this.greeting = getTodayGreeting();
  }
}

