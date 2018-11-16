import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      imie: new FormControl('', Validators.required),
      nazwisko: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      plec: new FormControl('', Validators.required),
      wiek: new FormControl('', Validators.required),
      wiadomosc: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

}
