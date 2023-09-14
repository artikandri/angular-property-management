import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent {
  dropdownProps : any = {'dropdownText': 'This week', type: 'default', 'dropdownItems': [{'text': 'This week'}, {'text': 'This month'}, {'text': 'This year'}]}

}
