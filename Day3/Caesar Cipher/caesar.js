// A = 65
// Z = 90
// a = 97
// z = 122


var CaesarCipher = function (text, pos) {
  var arr_text = text.split('');

  this.encript = function() {

    var result = []


    arr_text.forEach( function(word){

      var charCode = word.charCodeAt();
      // var codeToChar = String.fromCharCode(charCode)

      for(var i = 0; i < Math.abs(pos); i++) {

        if (pos < 0) {
          if ((charCode - 1) < 97 || (charCode - 1) < 65) {
            if (charCode != 32)
            {
              charCode = 122;
            }
          } else {
            charCode--;
          }

        } else {
          if ((charCode + 1) > 122 || (charCode + 1) > 90) {
            if ((charCode + 1) > 122)
            {
              charCode = 65;

            } else {

              charCode = 97;
              
            }
            
          } else {
            if (charCode != 32) {
              charCode++;
            }
          }
        }

      }

      return result.push(String.fromCharCode(charCode));
    });

    return result.join('');

  }



}



new_cipher = new CaesarCipher('AZabc dfgz', 1);
console.log( new_cipher.encript() )