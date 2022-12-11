//let farm = ["inek", "koyun", "tavuk", "domuz"];

let inek = prompt("inek sayısını giriniz", ) ;  //kaç tane inek var sayi giriniz
let koyun = prompt("koyun sayısını giriniz", ) ; //kaç tane koyun var sayi giriniz
let tavuk = prompt("tavuk sayısını giriniz", ) ; //kaç tane tavuk var sayi giriniz
let domuz = prompt("domuz sayısını giriniz", ) ; //kaç tane domuz var sayi giriniz

let farm_array = [
    {
      animal: "inek",
      hayvanSayisi: inek,
      paca: 1
    },
    {
      animal: "koyun",
      hayvanSayisi: koyun,
      paca: 1
    },
    {
      animal: "tavuk",
      hayvanSayisi: tavuk,
      paca: 0
    },
    {
      animal: "domuz",
      hayvanSayisi: domuz,
      paca: 0
    }
    ]
    let kelleci 

for (let index = 0; index < farm_array.length; index++) {
   if (farm_array[index].paca == 1 ) { 
   kelleci = farm_array[index].hayvanSayisi*4
    
   }    
}

//console.log(kelleci);

document.write(kelleci)
 