import { NgModule } from "@angular/core";
import { ContactFormComponent } from "./contact-form.component";
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    InputTextModule,
    InputTextareaModule,
    MultiSelectModule
  ],
  exports: [ContactFormComponent]
})
export class ContantFormModule {}