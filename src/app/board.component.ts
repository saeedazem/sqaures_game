import { Component, Input } from '@angular/core';

@Component({
  selector: 'board',
  template: `
  <ng-template
    ngFor let-row [ngForOf]="rows"
  >
    <row class="pure-g" [id]="row.id" [dimension]="dimension"></row>
  </ng-template>`,
  styleUrls: [ './css/pure-min.css' ]
  })
export class BoardComponent  {
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
