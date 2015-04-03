'use strict';

export default class Categories {
  like(c) {
    var max = 0;
    var keep;

    for(var i = 1; i<7; i++){
      var antLike = antall[i];
      var prob = 1;
      var poeng = c*i;
      var n = 5-antLike;
      var missing;

      if(antLike>c-1){
        missing=0;
      }
      else{
        missing = c-antLike;
      }

      for(var j=0;j<missing;j++){
        prob=prob-binomial(j,n);
      }

      var everdi = prob*poeng;

      if(everdi>max){
        max = everdi;
        keep=i;
      }
    }

    var beholdes = [];
    for(var i=0;i<5;i++){
      if(terninger[i]==keep){
        beholdes[i]=true;
      }
      else {
        beholdes[i]=false;
      }
    }
    beholdes[5]=max;
    return beholdes;
  }
  toPar(){
    var max = 0;
    var keep;

    for(var i=6;i>1;i--){
      for(var j=i-1;j>0;j--){
        var missingA, missingB;
        var poeng = 2*i+2*j;
        var prob;

        if(antall[i]>1){
          missingA=0;
        }
        else{
          missingA=2-antall[i];
        }
        if(antall[j]>1){
          missingB=0;
        }
        else{
          missingB=2-antall[j];
        }

        var totalMiss = missingA+missingB;

        if(missingA==0 || missingB==0){
          var n = totalMiss+1;
          prob = 1;
          for(var m=0;m<totalMiss;m++){
            prob = prob - binomial(m,n);
          }
        }

        else if(missingA==1 && missingB==1){
          prob = 5*Math.pow(1/6,2);
        }
        else if(totalMiss==3){
          prob = 58*Math.pow(1/6,4);
        }
        else if(totalMiss==4){
          prob = 140*Math.pow(1/6,5);
        }

        var everdi = prob*poeng;

        if(everdi>max){
          max = everdi;
          keep = [i,j];
        }

      }
    }

    var beholdes = [];
    for(var i=0;i<5;i++){
      if(terninger[i]==keep[0] || terninger[i]==keep[1]){
        beholdes[i]=true;
      }
      else {
        beholdes[i]=false;
      }
    }
    beholdes[5]=max;
    return beholdes;
  }
}
