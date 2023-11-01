import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  languages: string[] = ['UA', 'RU'];
  selectedLanguage: string = 'UA';
  isSubmitFormVisible = true;
  isModalVisible = false;
  isCookieVisible = true;
  showRoutes = true;
  isDesktop = true;
  isModalOpen: boolean = false;

  constructor() {
    window.onresize = () => {
        this.isDesktop = window.innerWidth > 768;
        if (this.isDesktop) {
            this.showRoutes = false;
        }
    };
 }
 
ngOnInit() {
  this.checkScreenSize();
}

@HostListener('window:resize', ['$event'])
onResize(event: boolean) {
  this.checkScreenSize();
}

private checkScreenSize() {
  this.isDesktop = window.innerWidth > 320 ? true : false;
  if(this.isDesktop){
    this.showRoutes = true;
  }
}

  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

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
