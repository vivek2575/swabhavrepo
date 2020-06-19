import { Component } from '@angular/core';
import { Contacts , Contact } from '@ionic-native/Contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
myContacts:Contact[]=[];
  constructor(private contacts:Contacts , private callNumber:CallNumber, private sms:SMS, private toastCtrl:ToastController) {}


  loadContacts(){
    let options={
      filter:'',
      multiple: true,
      hasPhoneNumber: true
    };

    this.contacts.find(['*'], options).then((contacts: Contact[]) =>{
      this.myContacts=contacts;
      console.log('Contacts:',contacts);
    })
  }

  sendsms(contact:Contact){
    this.sms.send(contact.phoneNumbers[ 0 ].value, 'this is predefined message to you!');

  }

  call(contact: Contact){
    this.callNumber.callNumber(contact.phoneNumbers[0].value,true);
  }

 /* contact = {
    displayName:null, 
    phoneNumbers:null, 
    birthday:null
 };*/

  detail(contact: Contact){
    //this.contact.displayName = contact.displayName; 
    //this.contact.phoneNumbers = contact.phoneNumbers[0].value; 
    //contact.birthday = contact.birthday;
    console.log("Name :" , contact.displayName );
    console.log("No. :", contact.phoneNumbers[0].value);
    console.log("Birthday :", contact.birthday);
  }

}
