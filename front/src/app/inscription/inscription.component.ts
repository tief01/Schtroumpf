import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  id: String = ''
  password: String = ''
  age: Number = 0 
  famille: String = ''
  race: String = ''
  nourriture: String = ''

  constructor(public http: HttpClient, private router: Router) {  }

  handleSubmit() {
    this.http
      .post<any[]>(`http://localhost:8080/Schtroumpf`, {
        id: this.id,
        pass: this.password,
        age: this.age,
        famille: this.famille,
        race: this.race,
        nourriture: this.nourriture,
        amis: []
      })
      .subscribe(
        res => {
          alert('Inscription complete')
          this.router.navigate([''])
        }
      )
  }

  ngOnInit(): void {
  }

}
