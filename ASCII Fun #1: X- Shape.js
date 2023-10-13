/*
DESCRIPTION:
You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o

Examples

                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□             x(5) =>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■

Series: ASCII Fun
ASCII Fun #1: X-Shape
ASCII Fun #2: Funny Dots
ASCII Fun #3: Puzzle Tiles
ASCII Fun #4: Build a pyramid
*/

function x(n){
  let arr = Array.from({length:n},x=>Array.from({length:n},x=>'□'))
  for (let i=0,k=n-1;i<n;i++,k--){
    arr[i][i]='■'
    arr[k][i]='■'
  }
  return arr.map(v=>v.join``).join`\n`
}
