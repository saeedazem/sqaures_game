import { Component, Input } from "@angular/core";

@Component({
  selector: "board2",
  template: `
    <ng-template ngFor let-row [ngForOf]="rows">
      <row2 class="pure-g" [id]="row.id" [dimension]="dimension"></row2>
    </ng-template>
  `,
  styleUrls: ["./css/pure-min.css"]
})
export class Board2Component {
  @Input() dimension: number;
  rows = [];

  ngOnInit() {
    for (let i = 0; i < this.dimension; i++) {
      this.rows.push({
        dimension: this.dimension,
        id: i
      });
    }
  }
}
