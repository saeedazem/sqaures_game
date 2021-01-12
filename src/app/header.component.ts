import { Component, Input } from "@angular/core";

@Component({
  selector: "header",
  template: `
    <h1>{{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HeaderComponent {
  @Input() name: string;
}
