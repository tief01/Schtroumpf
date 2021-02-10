import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  id: String = ''
  password: String = ''  
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
  }

  connect(){
    console.log('test click')
    this.userService.connectUser(this.id)
    this.http
      .post<any[]>(`http://localhost:8080/auth/`, { id: this.id, pass: this.password })
      .subscribe({
        next: data => {
          console.log("connection successful")
          this.router.navigate(['Schtroumpf', this.id])
        }
      })
  }

}
