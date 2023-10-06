/*
DESCRIPTION:
Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data are stored as a single data value and count.

A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.

Your task is to write a RLE encoder and decoder using this technique. The texts to encode will always consist of only uppercase characters, no numbers.
*/

function encode(input) {
	return input.replace(/(.)\1*/g, (match, p1) => match.length + p1);
}

function decode(input) {
  return input.replace(/(\d+)(.)+?/g, (_, p1, p2) => p2.repeat(p1));
}

/*
function encode(input) {
  let ans = '';
  let ct = 1;
  let i=0;
  while(i + 1 <= input.length){
    if(input[i] == input[i+1]){
      ct += 1
    }
    else{
      ans += (ct + input[i])
      ct = 1
    }
    i += 1;
  }
  return ans;
}

function decode(input) {
  let ans = '';
  let match = input.match(/\d+[A-Z]/g);
  for(i in match){
    ans += match[i].slice(-1).repeat(Number(match[i].slice(0, -1)))
  }
  return ans;
}
*/
