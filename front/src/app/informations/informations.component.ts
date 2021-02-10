import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from './user';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  search: String = ''
  usr: String = ''
  friendList: String[] = []
  user: User = {
    id: '',
    age: 0,
    famille: '',
    race: '',
    nourriture: '',
    amis: []
  }
  isUser: Boolean = true
  btnAmi: String = 'Add ami'
  update: Boolean =false

  upAge: Number = 0
  upFamille: String=''
  upRace: String = ''
  upNourriture: String = ''
  upAmis: [] = []


  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute, public userService: UserService) {
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.usr = params['id']
    })
    this.getInfo(this.usr)
    this.getAmiList()
    this.isUser=true
  }

  getAmiList(){
    this.http
      .get<any>(`http://localhost:8080/Schtroumpf/${this.userService.user}`)
      .subscribe(res => {
        this.friendList=res.amis
        console.log(this.usr)
        this.btnAmi=(res.amis.includes(this.usr)?"Delete ami":"Add ami")
      })
  }

  getInfo(data: String) {
    this.http
      .get<any>(`http://localhost:8080/Schtroumpf/${data}`)
      .subscribe(
        (res) => {
          if(this.usr!==data){
            this.router.navigate(['Schtroumpf', data])
          }
          this.user = res
          this.isUser=this.userService.user===data
          this.btnAmi=(this.friendList.includes(data)?"Delete ami":"Add ami")
        },
        (err) => console.log("erreur " + err)
      )
  }

  addAmi() {
    this.http
      .put<any[]>(`http://localhost:8080/Schtroumpf/${this.userService.user}`, { amis: this.search })
      .subscribe(
        (res) => {
          alert(`${this.search} ${this.friendList.includes(this.usr)?"deleted from the friend list":"added to the friend list"}`)
          this.btnAmi=(this.friendList.includes(this.usr)?'Add ami':'Delete ami')
          this.friendList= this.friendList.includes(this.usr)?this.friendList.filter(value => value!==this.usr):[...this.friendList, this.usr]
          console.log(this.friendList)
        },
        (err) => console.log(err)
      )
  } 

  toUpdate() {
    this.update=true
  }

  updateProfile() {
    this.http
      .put<any[]>(`http://localhost:8080/Schtroumpf/${this.userService.user}`, {
        age: (this.upAge!==0&&this.upAge?this.upAge:this.user.age),
        famille: (this.upFamille?this.upFamille:this.user.famille),
        race: (this.upRace?this.upRace:this.user.race),
        nourriture: (this.upNourriture?this.upNourriture:this.user.nourriture)
      })
      .subscribe(
        res => {
          this.user.age= (this.upAge!==0&&this.upAge?this.upAge:this.user.age),
          this.user.famille= (this.upFamille?this.upFamille:this.user.famille),
          this.user.race= (this.upRace?this.upRace:this.user.race),
          this.user.nourriture= (this.upNourriture?this.upNourriture:this.user.nourriture)
          this.update=false
          alert(`profile edited`)
        }
        ,
        err => console.log(err)
      )
  }

  handleClickList(user: String) {
    this.getInfo(user)
  }

  logout() {
    this.http.delete(`http://localhost:8080/auth/${this.userService.user}`)
      .subscribe()
    this.router.navigate([''])
  }
}