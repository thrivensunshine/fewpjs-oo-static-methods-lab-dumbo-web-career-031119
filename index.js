class Formatter {
  //add static methods here
  static capitalize(str){
    return  str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str){
    let newStr = str.replace(/[^-,^' ',A-Za-z0-9]+/g, '');
  return newStr
    }
    
 static titleize(str){
      let specWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'form']
      let strArr = str.split(' ')
     
    for(let i = 0; i < strArr.length; i++){
       strArr[i][0] = strArr[i][0].toUpperCase()
      for(let j = 0; j < specWords.length; j++){
        if (strArr[i] === specWords[j]){
        
         strArr[i] = strArr[i].toUpperCase()
          
        }
      }
    }
    return strArr.join(' ', ' ')
    }
}