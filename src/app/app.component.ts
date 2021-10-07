import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signUpForm!: NgForm;
  suggestUsername() {
    const suggestName = 'SuperUser';
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
  title = 'ng-forms';
}
