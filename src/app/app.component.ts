import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncPipe,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http=inject(HttpClient);
  contactsForm=new FormGroup({
    name:new FormControl<string>(''),
    email:new FormGroup<string | null>(null),
    phone:new FormControl<string>(''),
    favorite:new FormControl<boolean>(false)
  })

  contacts$=this.getContacts();

  private getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://localhost:7059/api/Contacts')
  }
}


