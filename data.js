

const  rastSayilar = [] ;

for (let index = 0; index < 10 ; index++) {
  let rastSayi = Math.random() * 100 ;    // rastgele 10 sayı üretildi kesirli olarak
  rastSayilar.push(parseInt(rastSayi))   /// rastgele 10 sayı tam sayıya yuvarlandı

}



let ciftSayilar = []

for (let index = 0; index < 10 ; index++) {

  let rastSayi = rastSayilar[index]
  if (rastSayi %2 === 0 ) { 

    ciftSayilar.push(rastSayi)


  } 

}

console.log(ciftSayilar)



function tekSayilar(SayilarDizisi) {
  let tekSayilarDizisi = []

  for (let index = 0; index < SayilarDizisi.length; index++) {

    let sayi1  = SayilarDizisi[index]

    if ( sayi1 % 2 !== 0) {

      tekSayilarDizisi.push(sayi1)
    } 

    

  }
  console.log(tekSayilarDizisi)
}

tekSayilar(rastSayilar)