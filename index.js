// Array method for sorting numbers in array ;
Array.prototype.numberSort = function(){
    let arr = this;
    arr.sort(function(a, b) {
        return a - b;
      });
      return arr;
}
let arr = [1,5,18,9,4];
console.log(arr.numberSort());
//////////////////////////////////////////////////////////////////////////////////////////
String.prototype.Identify = function(){
    let vowelArr = ["A","a","e","E","I","i","O","o","U","u"];
    let consonantCount = 0 ;
    let vowelCount = 0 ;
    let numCount = 0 ;
    let specialCount = 0 ;
    let str = this.split('');
    for(let i = 0 ; i < str.length ; i++){
        if(vowelArr.includes(str[i])){
            vowelCount++;
        }
        else if((str[i].charCodeAt(0)>=65 && str[i].charCodeAt(0)<=90) || (str[i].charCodeAt(0)>=97 && str[i].charCodeAt(0)<=112)){
            consonantCount++;
        }
        else if((str[i].charCodeAt(0)>=48 && str[i].charCodeAt(0)<=57)){
            numCount++;
        }
        else{
            specialCount++;
        }
    }
    let obj = {
        "Vowel": vowelCount,
        "Consonant": consonantCount,
        "Number":numCount,
        "Special Character":specialCount,
    }
    return obj;
}
let str = "Welcome2#MUO";
console.log(str.Identify());
