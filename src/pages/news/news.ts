import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewsDetailsPage } from '../news-details/news-details';




/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public list=[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      for (let i = 0; i < 10; i++) {
        this.list.push("这是第"+i+"条新闻")
      }
  }

  goNewsDetails(){
    this.navCtrl.push(NewsDetailsPage)
  }
}
