import { Component, OnInit } from '@angular/core';
import{ User} from '../shared/user.model'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  user :User;
  constructor() { }

  ngOnInit(): void {
    this.resetForm();
  }
resetForm(form? : NgForm){
  if (form!=null)
  form.reset();
  this.user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:''
  }
}
}
