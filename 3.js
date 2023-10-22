
let sepet = [
    {
      urunAd : "Süt",
      fiyat : 25,
      adet : 3,
      hediyePuan : 2
    },
    {
      urunAd : "Ketçap",
      fiyat : 35,
      adet : 2,
      hediyePuan : 3
    },
    {
      urunAd : "Mayonez",
      fiyat : 30,
      adet : 5,
      hediyePuan : 1
    },
    {
      urunAd : "Yumurta",
      fiyat : 2,
      adet : 15,
      hediyePuan : 0.5
    }
   ];


   function sepetBilgi(diziUrun) {
        console.log("Toplam ürün: "+ diziUrun.length);
        diziUrun.forEach(urun => {
           console.log(" ") ;
           console.log(urun.urunAd +": "+ (urun.fiyat * urun.adet));
           console.log("Puan: "+urun.hediyePuan);
         

        })
   }
   
   
   sepetBilgi(sepet) ; 