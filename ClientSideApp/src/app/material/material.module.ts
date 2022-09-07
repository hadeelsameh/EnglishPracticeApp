import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/* module to import modules of Material package in a modular way*/
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatStepperModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule ,
  MatDialogModule,
  MatProgressBarModule
]


@NgModule({
  imports: [
    MaterialComponents

  ],
  exports:[
    MaterialComponents

  ]
})
export class MaterialModule { }
