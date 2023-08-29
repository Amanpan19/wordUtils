import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-p',
  templateUrl: './landing-p.component.html',
  styleUrls: ['./landing-p.component.css']
})
export class LandingPComponent implements OnInit{
  textEntered:string="";
  newText:string="";
  textLength:number=0;
  wordLength:number=0;
  darkMode: boolean = false;

  constructor(){}
ngOnInit(): void {
 this.updatedLength();
 this.wordsLength();
}

updatedLength(){
  this.textLength=this.textEntered.length;
}
upperCase(){ 
  this.newText=this.textEntered.toUpperCase(); 
}

lowerCase(){
  this.newText=this.textEntered.toLowerCase(); 
}
removeSpace(){
  this.newText=this.textEntered.replace(/\s/g,""); 
}
clear(){
 this.textEntered="";
 this.newText=this.textEntered;
 this.textLength=0;
 this.wordLength=0;
}

wordsLength(){
 this.wordLength = this.textEntered.split(" ").filter(word=> word.trim()!=='').length;
 console.log(this.wordLength);
 
}
toggleDarkMode(){
  this.darkMode = !this.darkMode;

  if (this.darkMode) {
    document.body.style.backgroundColor = '#262224';
    
    const paras = document.querySelectorAll('p');
    paras.forEach(para => {
      para.style.color = 'white';
    });

  } else {
    document.body.style.backgroundColor = '';
    
    const paras = document.querySelectorAll('p');
    paras.forEach(para => {
      para.style.color = 'black';
    });
  }
}
}


