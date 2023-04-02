// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
const disemvowel = (str) => {
    const vowels = ['a','e','i','o','u'];
    let arrayStr = str.split('');
    let newArray = [];
   
      arrayStr.forEach((item,index) =>{
      for(let element of  vowels){
        if(item.toLowerCase() === element ){
          newArray.push(index);
          
          
        }
      }
    });
    newArray.reverse();
    for(let element of newArray){
      arrayStr.splice(element ,1)
    }
    let arrayStrJoin = arrayStr.join('');
     
    
    
    
    return arrayStrJoin;
  }