import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'pink';
  colors = [
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'black',
    'white',
    'lightgray',
    'brown',
    'steelblue',
    'springgreen',
    'darkgoldenrod',
    'blueviolet',
    'cadetblue',
    'antiquewhite',
    'cyan',
    'deeppink'
  ];
  votes: { [color: string]: number } = { };

  voteForColor(color: string) {
    this.color = color;    
    this.votes[color] = (this.votes[color] || 0) + 1;
    this.colors = this.colors.sort((color1, color2) => {
      const votes1 = this.votes[color1] || 0;
      const votes2 = this.votes[color2] || 0;
      if (votes1 > votes2)
        return -1;
      
      if (votes2 > votes1)
        return 1;
      
      return 0;
    });
  }

}
