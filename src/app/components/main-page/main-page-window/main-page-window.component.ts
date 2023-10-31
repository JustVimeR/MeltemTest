import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page-window',
  templateUrl: './main-page-window.component.html',
  styleUrls: ['./main-page-window.component.scss']
})
export class MainPageWindowComponent implements OnInit{

@Output() closeModal = new EventEmitter<void>();
@Output() submitClicked = new EventEmitter<void>();

isModalVisible = false;
public form!: FormGroup;

constructor (private fb: FormBuilder) { }

ngOnInit() {
  this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['+38', [Validators.required, this.phoneValidator, Validators.minLength(12)]]
  });
}

closeWindow(): void {
  this.closeModal.emit();
}

submitForm() {
  if (this.form.valid) {
      console.log(this.form.value);
      this.submitClicked.emit();
  } else {
      
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control?.markAsTouched({ onlySelf: true });
  });
  }
}

phoneValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(control.value)) {
      return { 'invalidPhone': true };
  }
  return null;
}

}
