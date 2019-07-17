import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, observable } from 'rxjs';

export interface Contact {
    nombre: String;
    apellidos: String;
    email: String;
    empresa: String;
    descripcion: String;
    publicidad: boolean;
}
export interface ContactResponse{
    status: number;
    message: String;
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    API_URI = 'http://localhost:3000/contacto'

    constructor(protected http: HttpClient) {
        
    }

    public sendContact(contact: Contact) {
        if(contact){
            return this.http.post(this.API_URI, contact);
        }else {
            throw new Error("Incomplete data provided")
        }
    }
}