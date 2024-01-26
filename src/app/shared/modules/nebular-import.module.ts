import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';



const modules = [
  FormsModule,
  NbInputModule,
  NbCheckboxModule,
  NbButtonModule,
  NbCardModule
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules 
})
export class NebularImportModule { }
