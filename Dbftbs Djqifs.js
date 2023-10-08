/*
DESCRIPTION:
Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

Your task
Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

Examples
A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.
*/

function encryptor(key, message) {
  key = (key % 26 + 26) % 26;
  
  return message.replace(/[a-z]/gi, letter => {
    const shift = (letter >= "a") ? 97 : 65;
    return String.fromCharCode((letter.charCodeAt() - shift + key) % 26 + shift); 
  });
}

/*
function encryptor (key, message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  let encrypted = [];
  for(i=0;i<message.length;i++){
    let index = alphabet.indexOf(message[i].toLowerCase())
    if(index == -1){
      encrypted.push(message[i]) // if character is not in alphabet
    } else{
      let movedIndex = index + key;
      while(movedIndex >= 26){
        movedIndex = movedIndex - 26
      }
      while(movedIndex < 0){
        movedIndex = 26 + movedIndex;
      }
      encrypted.push(message[i] == message[i].toUpperCase() ? alphabet[movedIndex].toUpperCase() : alphabet[movedIndex]);
    }
  } 
	return encrypted.join("");
}
*/
