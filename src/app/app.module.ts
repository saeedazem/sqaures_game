import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { BoardComponent } from "./board.component";
import { RowComponent } from "./row.component";
import { CellComponent } from "./cell.component";
import { Board2Component } from "./board2.component";
import { Row2Component } from "./row2.component";
import { Cell2Component } from "./cell2.component";

import { environment } from "./src/environments/environment";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    RowComponent,
    CellComponent,
    Board2Component,
    Row2Component,
    Cell2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
