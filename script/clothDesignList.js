    
console.log("Hello World");
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

var c1=new Cloth();
c1.setCloth(
    1,
    'Pure Cotton',
     'S Kumar', 
     'rgba(239, 255, 17, 1)',
     90.00,
     'Comfotable and Suitable for body',
     './clothes/yellow.jpg'
);
c1.addImages('./clothes/green.jpg');

clothList.push(c1);

var c2=new Cloth();
c2.setCloth(
    2,
    'Pure Cotton',
     'Dayal Super', 
     'rgba(53, 255, 46, 1)',
     120.00,
     'The cloth is smooth and softy',
     './clothes/green.jpg'
);
c2.addImages('./clothes/yellow.jpg');

clothList.push(c2);
