import { Component } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "my-app",
  template: `
    <h1>{{ name }}</h1>
    <div class="page">
      <board class="board" dimension="3"></board>
    </div>
    <div class="page">
      <board2 class="board2" dimension="3"></board2>
    </div>
  `,
  styleUrls: ["./css/app.component.css"]
})
export class AppComponent {
  name = "Squares Game Task";
}