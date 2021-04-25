import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  user: SocialUser;
  myUser: any;

  constructor(private socialAuthService: SocialAuthService) {
    
  }
  
  // Mobile navbar
  MobileNavActive = false;
  viewMobileNav() {
    this.MobileNavActive = !this.MobileNavActive;
  }

  subMenuActive = false;
  viewSubMenu() {
    this.subMenuActive = !this.subMenuActive;
  }

  // Search
  searchOpen = false
  viewSearch() {
    this.searchOpen = true;
  }
  searchClose() {
    this.searchOpen = false;
  }

  ngOnInit(): void {
    // var navbarNav = document.getElementsByClassName("");
    // let defaultUser = this.user;
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   // console.log(this.user.name)


    //   localStorage.setItem('googleUserName', this.user.name);
    //   // localStorage.setItem('authUser', this.user);
    //   localStorage.getItem('googleUserName');
    //   console.log(this.user)
    // })
    // console.log(this.user)
    var pranto = this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.myUser = user;
      // this.myUser.
      // console.log(this.user.name)

      console.log("hi", this.user.name)
      localStorage.setItem('googleUserName', this.user.name);
      localStorage.getItem('googleUserName');
      // // localStorage.setItem('authUser', this.user);
      // console.log(this.user)
      
    })
    console.log("pranto", this.myUser.name)
    // if(localStorage.getItem('googleUserName')) {
    //   // this.user.name = pranto.add
    //   // this.user = user
    // }
    // console.log(this.user.name)
    // console.log(localStorage.getItem('googleUserName'))
    
    // else {
    //   this.socialAuthService.authState.subscribe((user) => {
    //     this.user = user;
    //     // console.log(this.user.name)
  
  
    //     localStorage.setItem('googleUserName', this.user.name);
    //     // localStorage.setItem('authUser', this.user);
    //     localStorage.getItem('googleUserName');
    //     console.log(this.user)
    //   })
    // }
  }

  ngAfterViewInit(){
    this.elementPosition = 10;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  // google signin
  signInWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // google signout
  signOutWithGoogle() {
    this.socialAuthService.signOut();
  }

}