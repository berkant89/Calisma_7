/* const sayilar = [
    5,
    8,
    10,
    9,
    22,
    99,
    65,
    44,
    92,
    14,

  ]; */


const  rastSayilar = [] ;

for (let index = 0; index < 10 ; index++) {
  let rastSayi = Math.random() * 100 ;    // rastgele 10 sayı üretildi kesirli olarak
  rastSayilar.push(parseInt(rastSayi))   /// rastgele 10 sayı tam sayıya yuvarlandı

}



const ciftSayilar = []

for (let index = 0; index < 10 ; index++) {

  let rastSayi = rastSayilar[index]
  if (rastSayi %2 === 0 ) { 

    ciftSayilar.push(rastSayi)


  } 

}

console.log(ciftSayilar)

