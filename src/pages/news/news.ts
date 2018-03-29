import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';
import { LoadingController,Loading } from 'ionic-angular';  





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
  public call:any="?callback=JSONP_CALLBACK"
  public url: any ="http://v.juhe.cn/joke/img/text.php"
  public key: any ="&key=df9e9bea78793affbeae741896adf680"
  public page:any=1
  public pagesize: any ="&pagesize=10&page="
  public messageLoader:Loading



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public jsonp: Jsonp,
    public http: Http,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {

    this.presentLoading()

    this.req('')
    
    
  }

 


  presentLoading() {
    this.messageLoader = this.loadingCtrl.create({
      content: "亲正在努力加载中...",
      // duration: 1000
    });
    // present(); 显示
    this.messageLoader.present();
    
    
  }
  destoryLoading(){
    this.messageLoader.dismiss();

  }


  req(infiniteScroll){
    var _this = this
    this.jsonp.get(this.url + this.call + this.key + this.pagesize + this.page)
    .subscribe(
      function (data) {
        _this.destoryLoading()

        let _data = data["_body"].result.data

        //把请求的数据跟原来的拼接
        _this.list = _this.list.concat(_data)

        if (infiniteScroll){
          //如果不调用 则不会在触发 ionInfinite
          infiniteScroll.complete();
          //当请求的数据小于10调的时候 不再触发ionInfinite
          if(_data<10){
            infiniteScroll.enable(false)
          }
        }
        // 请求完数据让page+1
        _this.page++;
        
      }
    )
  }






  doInfinite(infiniteScroll) {
    //触发上拉  请求数据
    this.req(infiniteScroll)
  }





}
