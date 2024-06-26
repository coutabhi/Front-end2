import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.component.html',
  styleUrls: ['./student-sign-up.component.css']
})
export class StudentSignUpComponent implements OnInit {
  msg:String="";
  user: UserComponent= new UserComponent();
togglePasswordVisibility() {

}
selectFunction($event: Event) {
throw new Error('Method not implemented.');
}
  
  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  
    div1:boolean=false;
    div2:boolean=false;
    div3:boolean=false;

    div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false;
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        this.div3=false;
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        this.div1=false;
    }


    selectFunctions(event: any) {
      const selectedValue = event.target.value;
      switch (selectedValue) {
        case 'mechanical':
          this.div1Function();
          break;
        case 'electrical':
          this.div2Function();
          break;
        case 'computer':
          this.div3Function();
          break;
        default:
          console.log("Invalid selection");
      }
    }
  
  
  insertdetails1(insert:any){
    this.is.addStudent(insert.value).subscribe();
    alert("Your are successfully signUp");
    this.click1();
  }
  click1(){
    this.router.navigateByUrl("/student");
   
  }

  insertdetails2(insert:any){
    this.is.addEEStudent(insert.value).subscribe();
    alert("Your are successfully signUp");
    this.click2();
  }
  click2(){
    this.router.navigateByUrl("/student");
   
  }

  insertdetails3(insert:any){
    this.is.addCEStudent(insert.value).subscribe();
    alert("Your are successfully signUp");
    this.click3();
  }
  click3(){
    this.router.navigateByUrl("/student");
   
  }


}

