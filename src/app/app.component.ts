import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kalkulator';
  public stevke = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  public output = '';
  public savedoutput: number;
  operacija: string;

  public addstevke(stevka) {
    this.output += stevka;
  }

  public saveoutput(operacija) {
    if (this.output === '') {
      return;
    }
    if (this.savedoutput) {
      this.equals();
    }
    else {
      this.savedoutput = Number(this.output);
    }
    this.output = '';
    this.operacija = operacija;
  }

  public equals() {
    const numberoutput = Number(this.output);
    switch (this.operacija) {
      case '+':
        this.savedoutput += numberoutput;
        break;
      case '-':
        this.savedoutput -= numberoutput;
        break;
      case '*':
        this.savedoutput *= numberoutput;
        break;
      case '/':
        this.savedoutput /= numberoutput;
        break;

    }
  }
}
