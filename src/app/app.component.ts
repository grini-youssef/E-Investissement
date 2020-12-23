import { Component } from '@angular/core';

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
        console.log("grini test");
        var indicator = <HTMLElement> document.querySelector('.is-active');
        indicator.classList.remove('is-active');
        item.classList.add('is-active');
      });
    });
  }

}
