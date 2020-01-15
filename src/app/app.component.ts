import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { Server } from 'http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue'];
  userModel= new User('','sudip.com',6463182032,'default','morning',true);
  topicHasEror=true;
  submitted=false;
  errormsg='';
constructor(private _enrollmentService: EnrollmentService){}
  

  validateTopic(value){

    if(value==='default')
    {
      this.topicHasEror=true;
    }
    else{
      this.topicHasEror=false;
    }

  }

  onSubmit(userForm)
  {
    
    
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      data=> console.log("success",data),
      error=> this.errormsg=error.statusText
    )
}
  }

