import { Component, Input } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "cell2",
  template: `
    <div [class]="style2" [id]="$id"></div>
  `,
  styleUrls: ["./css/app.component.css"]
})
export class Cell2Component {
  db;
  index = 0;
  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  @Input() rowId: number;
  @Input() id: number;
  @Input() idCell: number;

  style2: string;
  value: number = 0;

  async ngOnInit() {
    await this.db
      .object("/" + [this.id])
      .valueChanges()
      .subscribe(val => {
        //console.log(val);
        this.style2 = "cellContent " + "" + val;
      });
  }
  async ngOnModule() {
    await this.db
      .object("/" + [this.id])
      .valueChanges()
      .subscribe(val => {
        //console.log(val);
        this.style2 = "cellContent " + "" + val;
      });
  }
}
