import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Trending {{name}}!</h1>`,
  styles: [`h1 { font-family: "Bree Serif", serif; background-color: #fff;padding: 2px 0px 2px 20px;border:3px solid #888888; color: #ff7433 }`]
})
export class HelloComponent  {
  @Input() name: string;
}
