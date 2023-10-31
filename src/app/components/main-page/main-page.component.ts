import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  languages: string[] = ['UA', 'RU'];
  selectedLanguage: string = 'UA';
  isSubmitFormVisible = false;
  isModalVisible = false;
  isCookieVisible = true;


  setLanguage(lang: string): void {
    this.selectedLanguage = lang;
  } 

  showModal(): void {
    this.isModalVisible = true;
  }

  hideModal(): void {
    this.isModalVisible = false;
  }

  hideCookie(): void{
    this.isCookieVisible=false;
  }

  onSubmitClicked(): void {
    this.isModalVisible = false; 
    this.isSubmitFormVisible = true;

    setTimeout(() => {
      this.isSubmitFormVisible = false;
    }, 5000);
  }
}
