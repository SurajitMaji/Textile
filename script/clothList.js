    
class Cloth{

    constructor(){
        this.clothId=0,
        this.name='';
        this.brandName='';
        this.color='';
        this.perMeterPrice=0.0;
        this.description='';
        this.images=[];
    }
    setCloth(clothId,name,brandName,color,perMeterPrice,description,image){        
        this.clothId=clothId;
        this.name=name;
        this.brandName=brandName;
        this.color=color;
        this.perMeterPrice=perMeterPrice;
        this.description=description;
        this.images.push(image);
    }
    showCloth(){
        return `
        Cloth Id: ${this.clothId},
        Cloth Name: ${this.name},
        Brand Name: ${this.brandName},
        Color: ${this.color},
        Price: ${this.perMeterPrice}/Meter,    
        Images: ${this.images}    
        `;
    }
    addImages(photo){
        this.images.push(photo);
    }
}

// var v1.setCloth(clothId,
// name,
// brandName,
// color,
// perMeterPrice,
// description,
// image) -> main image
// console.log(c1.showCloth()); -> others images

//clothes array
var clothList=[];
// cloths image holding folders
var clothImageFodlder='./clothes/';
function findObject(id){
        for(var i=0;i<clothList.length;i++){
            if(clothList[i].clothId==id){              
                return clothList[i];
            }
        }
        return false;
    }

var c1=new Cloth();
c1.setCloth(
    1,
    'Pure Cotton Ajrak',
     '', 
     'rgb(168, 27, 5)',
     99.00,
     'Comfotable and Suitable for body. * 44" Width',
     '00000IMG_00000_BURST20251121212226_COVER~2.jpg'
);

clothList.push(c1);

var c2=new Cloth();
c2.setCloth(
    2,
    'Pure Cotton Ajrak',
     'Pure Cotton Ajrak', 
     'rgb(14, 36, 124) ',
     115.00,
     'Comfotable and Suitable for body. * 44" Width' ,
     'b5ed59f1-451e-4d79-8fba-1dd34c71ebf52.jpg'
);

clothList.push(c2);

var c3=new Cloth();
c3.setCloth(
    3,
    'Pure Cotton Ajrak',
     'Siyam Super', 
     'rgb(199, 0, 0)',
     99.00,
     'Comfotable and Suitable for body. * 44" Width. ',
     'b5ed59f1-451e-4d79-8fba-1dd34c71ebf53.jpg'
);

clothList.push(c3);


var c4=new Cloth();
c4.setCloth(
    4,
    'Pure Cotton',
     '', 
     'rgb(255, 248, 144)',
     95.00,
     'The cloth is smooth and softy',
     'd2faf835-dd3a-49e6-927a-8f5dc4f12e171.jpg'
);
clothList.push(c4);


var c5=new Cloth();
c5.setCloth(
    5,
    'Pure Cotton',
     '', 
     'rgb(255, 213, 46)',
     95.00,
     'The cloth is smooth and softy',
     'd2faf835-dd3a-49e6-927a-8f5dc4f12e173.jpg'
);
clothList.push(c5);

var c6=new Cloth();
c6.setCloth(
    6,
    'Pure Cotton',
     '', 
     'rgb(246, 246, 246)',
     95.00,
     'The cloth is smooth and softy',
     'd2faf835-dd3a-49e6-927a-8f5dc4f12e174.jpg'
);
clothList.push(c6);

var c7=new Cloth();
c7.setCloth(
    7,
    'Pure Cotton',
     '', 
     'rgb(26, 26, 26)',
     95.00,
     'The cloth is smooth and softy',
     'IMG_20251026_211536.jpg'
);
clothList.push(c7);


var c8=new Cloth();
c8.setCloth(
    8,
    'Pure Silk',
     '', 
     'rgb(255, 255, 255)',
     65.00,
     'The cloth is smooth and softy',
     'IMG_20251121_211944~2.jpg'
);
clothList.push(c8);

var c9=new Cloth();
c9.setCloth(
    9,
    'Pure Silk',
     '', 
     'rgb(194, 101, 2)',
     65.00,
     'The cloth is smooth and softy',
     'IMG_20251121_211944~23.jpg'
);
clothList.push(c9);

var c10=new Cloth();
c10.setCloth(
    10,
    'Pure Cotton',
     '', 
     'rgba(255, 255, 255, 0)',
     74.00,
     'The cloth is smooth and softy. * 35" Width',
     'd2faf835-dd3a-49e6-927a-8f5dc4f12e175.jpg'
);
c10.addImages('d2faf835-dd3a-49e6-927a-8f5dc4f12e176.jpg');
c10.addImages('d2faf835-dd3a-49e6-927a-8f5dc4f12e177.jpg');
clothList.push(c10);