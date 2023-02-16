import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputValue = ''

  passwordNow = ''


  onInput(event?: any) {
    this.inputValue = event.target.value
    if (this.inputValue.length == 0) {
      this.passwordNow = ''
    }
    console.log(this.passwordNow)
    if (this.inputValue.length > 0 && this.inputValue.length < 8) {
      this.passwordNow = 'bad'
    }
    if (this.inputValue.match(/(?=.*[A-Za-z]).{8,16}$/) || this.inputValue.match(/[0-9].{7,16}$/)  || this.inputValue.match(/(?=.*[#$@!%&*?]).{7,16}$/)) {
      this.passwordNow = 'easy'
    }
    if (this.inputValue.match(/(?=.*[A-Za-z])(?=.*?[0-9]).{8,16}$/) || this.inputValue.match(/(?=.*[#$@!%&*?])(?=.*?[0-9]).{8,16}$/) || this.inputValue.match(/(?=.*[#$@!%&*?])(?=.*[A-Za-z]).{8,16}$/)) {
      this.passwordNow = 'okay'
    }
    if (this.inputValue.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[#$@!%&*?]).{8,16}$/)) {
      this.passwordNow = 'nice'
    }

  }

}
