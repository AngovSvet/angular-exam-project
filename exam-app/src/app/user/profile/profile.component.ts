import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/utils/emailValidator';
import { EMAIL_DOMAINS } from 'src/app/constants/domainConst';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{
  wantsToEdit = false;

  constructor(
    private userService: UserService,
    private activRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router:Router, 
    private detect:ChangeDetectorRef
  ) {
  }

  userProfile: any;

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (profile) => (this.userProfile = profile),
    });
  }
  editForm = this.fb.group({
    username: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
  });

  

  changeView() {
    if (this.wantsToEdit) {
      this.wantsToEdit = false;
    } else {
      this.wantsToEdit = true;
    }
  }


  onSubmit(form: FormGroup) {
    let id = '';
    this.activRoute.params.subscribe({
      next: (value) => (id = value['userId']),
    });
    const  email = form.value.email;
    const username = form.value.username
    this.userService.editProfile(email,username,id).subscribe({
      next:()=>this.userService.logOut().subscribe({
        next:()=>this.router.navigate(['home'])
      })
    });
  }
}
