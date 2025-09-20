
    

class Product{

    constructor(){        
            this.id=0;
            this.name='Dress Name';
            this.image='./assets/7415529.png';
            this.images=[];
            this.price=0;
            this.size='';
            this.color='white';
            this.rattings='0.0';
            this.sale=0;
            this.neW=0;
            this.avilable=1;
            this.see=1;
            this.description='';
    }
    setInitialValues(id, name, image, price, size,rattings, sale, neW, 
        avilable,see){
            this.id=id;
            this.name=name;
            this.images.push(image);
            this.price=price;
            this.size=size;
            this.rattings=rattings;
            this.sale=sale;
            this.neW=neW;
            this.avilable=avilable;
            this.see=see;
        }
    setRequiredValues(id,name,image,price,size,color,category){
            this.id=id;
            this.name=name;
            this.images.push(image);
            this.price=price;
            this.size=size;
            this.color=color;
            this.category=category;
            this.rattings=4.1;
            this.sale=0;
            this.neW=0;
            this.avilable=1;
            this.see=1;


    }
    showProduct() {
        return `Id: ${this.id}\n 
        Name: ${this.name}\n 
        Images: ${this.images}\n 
        Price: ${this.price}\n 
       Size: ${this.size}\n 
        Rattings: ${this.rattings}\n 
        Sale: ${this.sale}\n 
        NeW: ${this.neW}\n 
        Avilable: ${this.avilable}\n 
        see: ${this.see}\n `;             
    }
    addImage(image){
            this.images.push(image);
    }
    makeUnseen(){
        this.see=0;
    }
    makeSale(){
        this.sale=1;
    }
    addDescription(desc){
        this.description=desc;
    }
    

}

var product_list2=[];
// finding the 'id' number is present in this list or not, if exist then return the object
function findObject(id){
        for(var i=0;i<product_list2.length;i++){
            if(product_list2[i].id==id){         
                return product_list2[i];
            }
        }
        return false;
    }


// var variable=new Product(1,
//     'Product Name',
//     'ImageURL',
//     Price,
//      'color'
//      size
//      'category'

//     Rattings,
//     Sale,
//     New,
//     Available,
//     See);


// add product start
var p1=new Product();    
     p1.setRequiredValues(1,    'Shirt',    './collection/IMG_20250905_010724.jpg',
    499.00,  
    'XL',
    'rgb(251, 255, 225)',
     'men'   );
     
p1.addDescription('Trending Now');
product_list2.push(p1);

var p2=new Product();
    p2.setRequiredValues(2,
    'Blouse',
    './collection/IMG_20250905_010508.jpg',
    90.00,
    '34',
    'rgba(229, 142, 255, 1)',
     'women' 

    );
product_list2.push(p2);

var p3=new Product();
    p3.setRequiredValues(3,
    'Shirt',
    './collection/IMG_20250905_010853.jpg',
    549.00,
    'XL',
    'rgba(235, 238, 207, 1)',
     'men' 

    );
product_list2.push(p3);

var p4=new Product();
    p4.setRequiredValues(4,
    'Blouse',
    './collection/b7c5caa3-c5b1-4dd0-b26c-433f1ea373.jpg',
    90.00,
    '32',
    'rgba(248, 234, 153, 1)',
     'men'
    );
p4.addImage('./collection/b7c5caa3-c5b1-4dd0-b26c-433f1ea3733f.jpg');

product_list2.push(p4);

var p5=new Product();
    p5.setRequiredValues(5,
    'Blouse',
    './collection/IMG_20250905_010206.jpg',
    90.00,
    '34',
    'rgba(4, 62, 189, 1)',
     'women' 

    );
product_list2.push(p5);

var p6=new Product();
    p6.setRequiredValues(6,
    'Blouse',
    './collection/08e991e4-e14b-4332-b25a.jpg',
     90.00,
    '32',
    'rgba(212, 198, 0, 1)',
     'women' 

    );
    p6.addImage('./collection/08e991e4-e14b-4332.jpg');
product_list2.push(p6);

var p7=new Product();
    p7.setRequiredValues(7,
    'Frock',
    './collection/724f5c8c-52d4-49c7-9cce-65da016dbdd.jpg',
    65.00,
    '1-2Y',
    'rgba(255, 129, 156, 1)',
     'girls' 
    );
    p7.addImage('./collection/08cfde54-764b-4610-8695-c058e324ca.jpg');
product_list2.push(p7);

var p8=new Product();
    p8.setRequiredValues(8,
    'Frock',
    './collection/IMG_20250919_17311~F.jpg',
    75.00,
    '6-7Y',
    'rgba(70, 255, 141, 1)',
     'girls' 
    );
      p8.addImage('./collection/IMG_20250919_1732.jpg');
    p8.addDescription('Frock For 6 to 7 years girl');
product_list2.push(p8);

var p9=new Product();
    p9.setRequiredValues(9,
    'Frock',
    './collection/IMG_20250919_173754~F.jpg',
    45.00,
    '1.5-2Y',
    'rgba(1, 68, 168, 1)',
     'kids' 

    );
      p9.addImage('./collection/IMG_20250919_173704~B.jpg');
product_list2.push(p9);

var p10=new Product();
    p10.setRequiredValues(10,
    'Baby Jhabela',
     './collection/IMG_20210912_115848.jpg',
     40.00,
     '0-8M',
    'rgba(253, 99, 150, 1)',
     'kids' 

    );
product_list2.push(p10);

var p11=new Product();
    p11.setRequiredValues(11,
    'Frock',
    './collection/81095598-3a6b-4d4e-be45-6a310efeff3a.jpg',
    130.00,
    '6Y',    
    'rgba(165, 4, 4, 1)',
     'kids' 
    );
    p11.addImage('./collection/81095598-3a6b-4d4e-be45-6a310ef.jpg');
    p11.addDescription('This is Pure Cutton and Suitable for 6-7 years old baby girl');
product_list2.push(p11);

var p12=new Product();
    p12.setRequiredValues(12,
    'Rumal',
     './collection/b4a825f3-35c1-4a58-b04b-07d.jpg',
     10.00,
     'N',
    'rgba(255, 247, 178, 1)',
     'general' 

    );
product_list2.push(p12);







//add product end 

// functions worked on those variables

        
  

