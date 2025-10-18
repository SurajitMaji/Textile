

var menGlobal=new StudioCategory('men');
let shirt=new Dress('shirt');
let shirtFront=new DressPart('front',1);
    let mS1=new  DressElement('Formal Shirt','149','fullSleevShirtFront.jpg');
    shirtFront.addDressElement(mS1);

shirt.addDressPart(shirtFront);
menGlobal.addDress(shirt);



let pant=new Dress('pant');
menGlobal.addDress(pant);

let kurta=new Dress('kurta');
menGlobal.addDress(kurta);

let trouser=new Dress('trouser');
menGlobal.addDress(trouser);

