import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService, Contact, ContactResponse } from '../../services/contact.service/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(protected contactService: ContactService) { }

  ngOnInit() {

  }

  onSubmit(contact: NgForm) {
    const dataForm: Contact = contact.value;
    this.contactService.sendContact(dataForm).subscribe(res => {
      console.log(res);
      let {message, status} = res;
      if(status){
        if(status == 200){
          alert("Mensaje enviado"); 
        }else{
          console.log("Datos no guardados");    
        }
      }
    }, error => {
      console.log(error);
    })
  }

}
