import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = ""
  members:string[] = []
  errorMessage = ""
  teams:string[][] = []

  onInput(member:string) {
    this.newMemberName = member
    
  }
  numberOfTheams: number | "" = ""

  onNumbersOfTheamInput(value:string) {
    this.numberOfTheams = Number(value)
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty"
      return
    }
    this.members.push(this.newMemberName)
    this.newMemberName = ""
    this.errorMessage= ""
    
  }
  generateTeams () {
    if (!this.numberOfTheams || this.numberOfTheams <= 0) {
      this.errorMessage = "Invalid number od team"
      return
    }
    if(this.members.length < this.numberOfTheams) {
      this.errorMessage = "Not enough members"
      return
    }
    this.errorMessage = ""
    const allMembers = [...this.members]
    while(allMembers.length) {
      for (let i = 0; i < this.numberOfTheams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length) 
        const member = allMembers.splice(randomIndex,1)[0]
        if(!member) break
        if( this.teams[i]) {
          this.teams[i].push(member)  //if arr exist, push member inside
        }
        else {
          this.teams[i] = [member]  //if arr doesn't exist, create arr with that member
        }
      }
    }
    console.log(this.teams)
    this.members = [] 
    this.numberOfTheams = ""
  }
}
