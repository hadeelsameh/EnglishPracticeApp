import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialoge-feedback',
  templateUrl: './dialoge-feedback.component.html',
  styleUrls: ['./dialoge-feedback.component.css']
})

/* Component for dialoge object so it can be used in practice component .
we are defining the style , the color of text based on the correctness of the answer */
export class DialogeFeedbackComponent implements OnInit {

  isSuccessful=false;

  constructor(@Inject(MAT_DIALOG_DATA) public data :any) {
    if(this.data.answer == "Correct"){
      this.isSuccessful=true;
    }
   }

  ngOnInit(): void {

  }

}
