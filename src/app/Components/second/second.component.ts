import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  images = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg', 'assets/4.jpg'];
  index: number = 0;
  image: string = this.images[this.index];
  sliding: boolean = false;
  interval;
  // constructor() {}
  backward() {
    if (this.index > 0 && !this.sliding) {
      this.index--;
      this.image = this.images[this.index];
    }
  }
  forward() {
    if (this.index < this.images.length - 1 && !this.sliding) {
      this.index++;
      this.image = this.images[this.index];
    }
  }
  async slide() {
    if (!this.sliding) {
      this.sliding = true;
      // while (this.sliding) {
      this.interval = setInterval(() => {
        console.log(this.sliding);
        if (this.index == this.images.length - 1) this.index = -1;
        this.index++;
        this.image = this.images[this.index];
      }, 5000);
      // }
    }
  }
  pause() {
    this.sliding = false;
    clearInterval(this.interval);
  }
}
