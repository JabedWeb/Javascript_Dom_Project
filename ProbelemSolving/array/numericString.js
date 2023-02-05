const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

function Ordinal(n)
 {
  const o = ["th","st","nd","rd"];
    const v = n % 100;
    console.log(n+(o[(v-20)%10]||o[v]||o[0]));
    console.log(o[(v-20)%10]);
    console.log(o[v]);
    console.log(o[0]);
    return n+(o[(v-20)%10]||o[v]||o[0]);
 }

for(n = 0; n < color.length; n++){
 const ordinal = n + 1;

 const output = Ordinal(ordinal)+"choice is"+ color[n];

console.log(output);
}