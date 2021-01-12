import { Component, Input } from "@angular/core";
@Component({
  selector: "row2",
  template: `
    <ng-template ngFor let-cell [ngForOf]="cells">
      <cell2 class="{{ style }}" [id]="cell.id"> </cell2>
    </ng-template>
  `,
  styleUrls: ["./css/app.component.css", "./css/pure-min.css"]
})
export class Row2Component {
  @Input() dimension: number;
  @Input() id: number;
  cells = [];
  style: string;

  ngOnInit() {
    this.style = "square pure-u-1-" + this.dimension;
    let idCellIndex = 0;
    if (this.id == 0) {
      idCellIndex = 0;
    } else if (this.id == 1) {
      idCellIndex = 3;
    } else if (this.id == 2) {
      idCellIndex = 6;
    }
    for (let i = 0; i < this.dimension; i++) {
      this.cells.push({
        rowId: this.id,
        id: idCellIndex,
        idCell: idCellIndex
      });
      idCellIndex += 1;
    }
  }
}
