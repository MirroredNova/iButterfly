import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, reorderArray } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private storage: Storage) {
    this.loadData();
  }

  notes:any = [];
  key:string = 'noteskey';
  inputData:any;

  saveData(){
    this.storage.set(this.key, JSON.stringify(this.notes));
  }
  
  loadData(){
    this.storage.get(this.key).then((val) => {
      this.notes = JSON.parse(val);
    });
  }

  /*
  addNote(){
    this.notes = this.notes || [];
    this.notes.push(this.inputData);
    this.inputData = "";
    this.saveData();
  }
  */

  addNote(){
    this.notes = this.notes || [];
    let prompt = this.alertCtrl.create({
      title: 'Add Food Place',
      inputs: [{
        name: 'title'
      }],
      buttons: [{
        text: 'Nope'
      },{
        text: 'Great',
        handler: data => {
          this.notes.push(data);
        }
      }]
    });
    prompt.present();
    this.saveData();
  }

  editNote(note){
    let prompt = this.alertCtrl.create({
      title: 'Edit Food Place',
      inputs: [{
        name: 'title'
      }],
      buttons: [{
        text: 'Nah'
      },{
        text: 'Super',
        handler: data => {
          let index = this.notes.indexOf(note);
          if(index > -1){
            this.notes[index] = data;
          }
        }
      }]
    });
    prompt.present();      
    this.saveData();
  }

  deleteNote(note){
    let index = this.notes.indexOf(note);
    if(index > -1){
      this.notes.splice(index, 1);
    }
    this.saveData();
  }

  clearAll(){
    let prompt = this.alertCtrl.create({
      title: 'Clear Notes',
      buttons: [{
        text: 'Uh noperino'
      },{
        text: 'Yah sure',
        handler: data => {
          this.notes = [];
        }
      }]
    });
    prompt.present();
    this.saveData();
  }

  getIdea(){
    var index = Math.floor(Math.random() * Math.floor(this.notes.length));
    let alert = this.alertCtrl.create({
      title: 'Food Place',
      subTitle: '' + this.notes[index].title,
      buttons: ['Alrighty']
    });
    alert.present();
    this.saveData();
  }

  reorderItems(indexes){
    this.notes = reorderArray(this.notes, indexes);
    this.saveData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
    this.loadData();
  }

}
