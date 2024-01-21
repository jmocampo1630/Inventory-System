import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';



const modules = [
  FormsModule,
  NbInputModule,
  NbCheckboxModule,
  NbButtonModule
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules 
})
export class NebularImportModule { }
