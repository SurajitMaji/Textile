// stroring for women category
var womenGlobal=new StudioCategory('women');

// blouse desing area
var blouse=new Dress('blouse');


let front=new DressPart('front',1);
let back=new DressPart('back',1);
let button=new DressPart('button',2);
let sleeve=new DressPart('sleeve',2);
let collar=new DressPart('collar',2);
// setting blouse front parts style 
    let f1=new DressElement('Wide U Neckline',99,'WHIET_BLOUSE_zoom.jpg');
    front.addDressElement(f1);
    let f2=new DressElement('Wide V Neckline',99);
    front.addDressElement(f2);
    let f3=new DressElement('Wide Shoulder V ',99);
    front.addDressElement(f3);
    let f4=new DressElement('Sweetheart Neck',99,'Princess_cut_blouse_design.jpg');
    front.addDressElement(f4);
    let f5=new DressElement('Square Shape',89,'puffetSleeve.png');
    front.addDressElement(f5);

blouse.addDressPart(front);

// setting blouse backside 
    const b1=new DressElement('Round U');
    back.addDressElement(b1);
    const b2=new DressElement('V Shape');
    back.addDressElement(b2);
    const b3=new DressElement('Diamond Shape');
    back.addDressElement(b3);
    const b4=new DressElement('Square Shape');
    back.addDressElement(b4);
    const b5=new DressElement('Closed Cover');
    back.addDressElement(b5);
    const b6=new DressElement('Small Oval');
    back.addDressElement(b6);
    const b7=new DressElement('Large Oval');
    back.addDressElement(b7);
    const b8=new DressElement('Filled with Strip');
    back.addDressElement(b8);

blouse.addDressPart(back);

// setting blouse sleeve
    const s1=new DressElement('Set-In');
    sleeve.addDressElement(s1);
    const s2=new DressElement('Bell');
    sleeve.addDressElement(s2);
    const s3=new DressElement('Butterfly');
    sleeve.addDressElement(s3);
    const s4=new DressElement('Flutter');
    sleeve.addDressElement(s4);
    const s5=new DressElement('Raglan');
    sleeve.addDressElement(s5);
    const s6=new DressElement('Bishop');
    sleeve.addDressElement(s6);
    const s7=new DressElement('Kimano');
    sleeve.addDressElement(s7);
    const s8=new DressElement('Kap');
    sleeve.addDressElement(s8);

    blouse.addDressPart(sleeve);

// setting blouse collar
    const c1=new DressElement('None');
    collar.addDressElement(c1);
    const c2=new DressElement('Regular');
    collar.addDressElement(c2);
    const c3=new DressElement('Redondo');
    collar.addDressElement(c3);
    const c4=new DressElement('Eton');
    collar.addDressElement(c4);
    const c5=new DressElement('Plano');
    collar.addDressElement(c5);
    const c6=new DressElement('Neru');
    collar.addDressElement(c6);

    blouse.addDressPart(collar);

  
// setting blouse button  
    const btn1=new DressElement('Hook-Eye',0,'Hook-and-Eye-Closures-Size-1-3032310-UNPACKAGED.jpg');
    button.addDressElement(btn1);
    const btn2=new DressElement('Flat Shank',0);
    button.addDressElement(btn2);
    const btn3=new DressElement('Snap',0,'button-snaps.jpg');
    button.addDressElement(btn3);
    const btn4=new DressElement('Horn',0,'MS27980-1N__5f203812ef567.jpg');
    button.addDressElement(btn4);
    const btn5=new DressElement('Full Shank',0,'71m1IY8VQEL._AC_SL1500_.jpg');
    button.addDressElement(btn5);
    const btn6=new DressElement('Polyester',0,'B847OS.jpg');
    button.addDressElement(btn6);
    const btn7=new DressElement('Metal',0);
    button.addDressElement(btn7);
    const btn8=new DressElement('Wooden',0);
    button.addDressElement(btn8);
    const btn9=new DressElement('Knot Shank',0);
    button.addDressElement(btn9);
    

    blouse.addDressPart(button);

womenGlobal.addDress(blouse);

var kurti=new Dress('kurti');
womenGlobal.addDress(kurti);

var ladypant=new Dress('pant');
womenGlobal.addDress(ladypant);
// womenGlobal.showStudioCategory();




// skirt inserting 
// setting frock front parts style 

var skirt=new Dress('skirt');
let frockFront=new DressPart('front',1);

    let frockF1=new DressElement('Gored',99,'womens-maxi-skirt-flat-technical-260nw-2228741543.jpg');
    frockFront.addDressElement(frockF1);
    let frockF2=new DressElement('Smoked Midi',99,'vector-smocked-midi-skirt-fashion-cad-woman-flared-asymmetric-hem-technical-drawing-template-flat-sketch-jersey-woven-238553710.jpg');
    frockFront.addDressElement(frockF2);
    let frockF3=new DressElement('Slit  ',99,'skirt-design-drawing_1163574-1087.jpg');
    frockFront.addDressElement(frockF3);
    let frockF4=new DressElement('Short 3-Layer',99,'short-skirt-three-layers-ruffles-260nw-2581676195.jpg');
    frockFront.addDressElement(frockF4);
    let frockF5=new DressElement('Slit Wrap',89,'8318b37359eb256cd8f280e761f50679.jpg');
    frockFront.addDressElement(frockF5);


skirt.addDressPart(frockFront);
womenGlobal.addDress(skirt);
