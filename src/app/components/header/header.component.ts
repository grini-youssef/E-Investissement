import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/shared/auth.service';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  isLoggedIn: boolean;
  username: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();

    var items = document.querySelectorAll('.nav-item');
    items.forEach(function (item, index) {
      item.addEventListener('click', function (e) {
        var indicator = <HTMLElement> document.querySelector('.is-active');
        indicator.classList.remove('is-active');
        item.classList.add('is-active');
        $(".navbtn").removeClass("change");
        $(".nav").removeClass("menu-clicked");

      });
    });

    $(".navbtn").click(function() {
      $(".navbtn").toggleClass("change");
      $(".nav").toggleClass("menu-clicked");
    });

    $(window).scroll(function () {
      let position = $(this).scrollTop();
  
      if (position >= 149) {
        $("#mynav").addClass("nav2");
        $("#mynav").addClass("fixed-top");
      } else {
        $("#mynav").removeClass("nav2");
        $("#mynav").removeClass("fixed-top");
      }
    });

    

    }

    goToUserProfile() {
      this.router.navigateByUrl('/user-profile/' + this.username);
    }
  
    logout() {
      this.authService.logout();
      this.isLoggedIn = false;
      this.router.navigateByUrl('');
    }

}
