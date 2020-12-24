import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Investissement';

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

  }

}
