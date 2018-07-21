import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cute',
  templateUrl: 'cute.html',
})
export class CutePage {

  number:number = 0;
  key2:string = 'numkey';

  text1:string;
  key1:string = 'textkey';

  picsrc:string;
  key3:string = 'pickey';

  vis:string = 'hidden';
  key4:string = 'viskey';


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController) {
    this.loadData();
  }

  saveData(){

    this.storage.set(this.key1, this.text1);
    this.storage.set(this.key2, this.number);
    this.storage.set(this.key3, this.picsrc);
    this.storage.set(this.key4, this.vis);
  }

  loadData(){
    this.storage.get(this.key1).then((val) => {
      this.text1 = val;
    });
    this.storage.get(this.key2).then((val) => {
      this.number = val;
    });
    this.storage.get(this.key3).then((val) => {
      this.picsrc = val;
    });
    this.storage.get(this.key4).then((val) => {
      this.vis = val;
    });
  }

  increment() {
    this.number++;
    this.checkIndex();
    this.saveData();
  }


    checkIndex() {
    if(this.number == 22) {
      this.text1 = "I love you babyy!!";
      this.picsrc = "assets/imgs/img1.jpg";
      this.vis = "visible";
    }
    else if(this.number == 5) {
      this.text1 = "This is just the beginning, sexy";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 6) {
      this.text1 = "There are images and phrases spread through this page, all over.";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 7) {
      this.text1 = "Good luck finding them all. The furthest one is at 5000.";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 8) {
      this.text1 = "I added a delay between when the text loads and when the image loads so you have to take a second.";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 9) {
      this.text1 = "I'm just kidding, I couldn't get them to load at the same time for some reason :P";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 11) {
      this.text1 = "Your fav # yayya idk man";
      this.picsrc = "assets/imgs/img8.jpg";
      this.vis = "visible";
    }
    else if(this.number == 30) {
      this.text1 = "Ill be 30 years old someday.";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 50) {
      this.text1 = "I have a bunch of these ;)";
      this.picsrc = "assets/imgs/img2.jpg";
      this.vis = "visible";
    }
    else if(this.number == 69) {
      this.text1 = "What a wholesome me me B";
      this.picsrc = "assets/imgs/meme1.jpg";
      this.vis = "visible";
    }
    else if(this.number == 96) {
      this.text1 = "em em emoselohw a tahW";
      this.picsrc = "assets/imgs/meme3.jpg";
      this.vis = "visible";
    }
    else if(this.number == 100) {
      this.text1 = "Wow, this is pretty far...";
      this.picsrc = "assets/imgs/img3.jpg";
      this.vis = "visible";
    }
    else if(this.number == 111) {
      this.text1 = "Oh nauty meeee";
      this.picsrc = "assets/imgs/meme2.jpg";
      this.vis = "visible";
    }
    else if(this.number == 123) {
      this.text1 = "I found this pic of sushi...Tadah";
      this.picsrc = "assets/imgs/meme4.jpg";
      this.vis = "visible";
    }
    else if(this.number == 150) {
      this.text1 = "Is this fun for ya?";
      this.picsrc = "assets/imgs/img4.jpg";
      this.vis = "visible";
    }
    else if(this.number == 169) {
      this.text1 = "Whonder what ehlse chould bhe ihn here.";
      this.picsrc = "assets/imgs/meme5.jpg";
      this.vis = "visible";
    }
    else if(this.number == 200) {
      this.text1 = "Did you do this all in one sitting???";
      this.picsrc = "assets/imgs/img5.jpg";
      this.vis = "visible";
    }
    else if(this.number == 250) {
      this.text1 = "I really dunno how motivated you are to find them all.";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 300) {
      this.text1 = "What a hottie! *see below*";
      this.picsrc = "assets/imgs/img6.jpg";
      this.vis = "visible";
    }
    else if(this.number ==420) {
      this.text1 = "Theres a dic pic at 1000 hehe.";
      this.picsrc = "assets/imgs/img7.jpg";
      this.vis = "visible";
    }
    else if(this.number ==1000) {
      this.text1 = "I lied, but you could have just asked... <3, maybe theres one at 2000";
      this.picsrc = "assets/imgs/meme6.jpg";
      this.vis = "visible";
    }
    else if(this.number == 2000) {
      this.text1 = "Sorry, hes shy.";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 5000) {
      this.text1 = "I lied, the furthest thing is actually at 20000";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 5001) {
      this.text1 = "But if you make it that far, tell me, and ill give you something really special.";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 6139) {
      this.text1 = "B";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 10000) {
      this.text1 = "Really? Wow you're persistant. It's almost like you really wanna get to 20000 or something, geez.";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 15000) {
      this.text1 = "Getting closer, babe";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == 20000) {
      this.text1 = "This is the only selfie I've ever taken. And this is something nobody has ever seen. I look pale asf.";
      this.picsrc = "selfieyo.jpg";
      this.vis = "visible";
    }
    else if(this.number == 32218) {
      this.text1 = "If you made it this far, that means you put a lot of time into this. Do you realize the significance of this number? Ive hidden some some other things at some significant numbers, but you might have to look harder to find them ;).";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == -3) {
      this.text1 = "Smartypants.";
      this.picsrc = "assets/imgs/back1.jpg";
      this.vis = "visible";
    }
    else if(this.number == -5) {
      this.text1 = "youre going backwards??? The heck....";
      this.picsrc = "assets/imgs/back2.jpg";
      this.vis = "visible";
    }
    else if(this.number == -7) {
      this.text1 = "STOP theres no more I SWEARRR!!";
      this.picsrc = "assets/imgs/back3.jpg";
      this.vis = "visible";
    }
    else if(this.number == -9) {
      this.text1 = "Cute, and a good listener hehe";
      this.picsrc = "assets/imgs/back4.jpg";
      this.vis = "visible";
    }
    else if(this.number == -11) {
      this.text1 = "Yoooo this is my safe space";
      this.picsrc = "assets/imgs/back5.jpg";
      this.vis = "visible";
    }
    else if(this.number == -13) {
      this.text1 = "Welp, the secrets out";
      this.picsrc = "assets/imgs/back6.jpg";
      this.vis = "visible";
    }
    else if(this.number == -15) {
      this.text1 = "I'm so happy you're mine, my little Butterfly";
      this.picsrc = "assets/imgs/back7.jpg";
      this.vis = "visible";
    }
    else if(this.number == -4) {
      this.text1 = "B";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == -17) {
      this.text1 = "B";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == -19) {
      this.text1 = "W";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == -22) {
      this.text1 = "Y";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == -28) {
      this.text1 = "B";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == -509) {
      this.text1 = "M";
      this.picsrc = "";
      this.vis = "visible";
    }
    else if(this.number == -455) {
      this.text1 = "E";
      this.picsrc = "";
      this.vis = "visible";
    }
    else {
      this.text1 = "";
      this.picsrc = "";
      this.vis = "hidden";
    }
  }

  reset() {
    let prompt = this.alertCtrl.create({
      title: 'Reset',
      buttons: [{
        text: 'No plz'
      },{
        text: 'Heck yeah!',
        handler: data => {
          this.number = 0;
          this.checkIndex();
        }
      }]
    });
    prompt.present();
    this.saveData();
  }

  decrement() {
    this.number = this.number - 1;
    this.checkIndex();
    this.saveData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CutePage');
  }

}
