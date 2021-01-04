import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
