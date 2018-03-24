import { Component, ViewChild  } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {

  }

  @ViewChild(Slides) slides: Slides;
  //解决切换其他页面回去轮播图不动问题
  ionViewWillEnter() {
    this.slides.startAutoplay();
  }
  ionViewWillLeave() {
    this.slides.stopAutoplay();
  }
}
