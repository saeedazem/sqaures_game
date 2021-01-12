import { Component, Input } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "cell",
  template: `
    <div [class]="style" (click)="onClick()" [id]="$id"></div>
  `,
  styleUrls: ["./css/app.component.css"]
})
export class CellComponent {
  db;
  index = 0;
  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  @Input() rowId: number;
  @Input() id: number;
  @Input() idCell: number;

  style: string;
  value: number = 0;

  ngOnInit() {
    this.style = this.getStyle(this.value);
    this.db
      .object("/" + [this.id])
      .valueChanges()
      .subscribe(val => {
        //console.log(val);
        this.style = "cellContent " + "" + val;
      });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onClick() {
    this.value = this.getRandomInt(1, 3);
    this.style = this.getStyle(this.value);
  }
  async ngOnModule() {
    await this.db
      .object("/" + [this.id])
      .valueChanges()
      .subscribe(val => {
        //console.log(val);
        this.style = "cellContent " + "" + val;
      });
  }
  getStyle(value: number): string {
    let style = "cellContent";
    if (value === 1) {
      let cell = this.id;
      let tmp = { [cell]: "red" };
      this.db.object("/").update(tmp);
      style += " red";
    }
    if (value === 2) {
      let cell = this.id;
      let tmp = { [cell]: "green" };
      this.db.object("/").update(tmp);
      style += " green";
    }
    if (value === 3) {
      let cell = this.id;
      let tmp = { [cell]: "blue" };
      this.db.object("/").update(tmp);
      style += " blue";
    }
    return style;
  }
}
