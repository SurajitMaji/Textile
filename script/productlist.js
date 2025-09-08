
    

class Product{
    constructor(){        
            this.id=0;
            this.name='Dress Name';
            this.image='./assets/7415529.png';
            this.price=0;
            this.rattings='0.0';
            this.sale=0;
            this.neW=0;
            this.avilable=1;
            this.see=1;
            this.description='';
    }
    setInitialValues(id, name, image, price, rattings, sale, neW, 
        avilable,see){
            this.id=id;
            this.name=name;
            this.image=image;
            this.price=price;
            this.rattings=rattings;
            this.sale=sale;
            this.neW=neW;
            this.avilable=avilable;
            this.see=see;
        }
    setRequiredValues(id,name,image,price,color,category){
            this.id=id;
            this.name=name;
            this.image=image;
            this.price=price;
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
        Image: ${this.image}\n 
        Price: ${this.Price}\n 
        Rattings: ${this.rattings}\n 
        Sale: ${this.sale}\n 
        NeW: ${this.neW}\n 
        Avilable: ${this.avilable}\n 
        see: ${this.see}\n `;             
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
                var p=new Product();                
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
//      'category'

//     Rattings,
//     Sale,
//     New,
//     Available,
//     See);
var p1=new Product();    
     p1.setRequiredValues(1,    'Shirt',    './collection/IMG_20250905_010724.jpg',
    499.00,  
    'rgb(251, 255, 225)',
     'men'   );
     
p1.addDescription('Trending Now');
product_list2.push(p1);

var p2=new Product();
    p2.setRequiredValues(2,
    'Blouse',
    './collection/IMG_20250905_010508.jpg',
    249.00,
    'rgba(229, 142, 255, 1)',
     'women' 

    );
product_list2.push(p2);

var p3=new Product();
    p3.setRequiredValues(3,
    'Shirt',
    './collection/IMG_20250905_010853.jpg',
    549.00,
    'rgba(235, 238, 207, 1)',
     'men' 

    );
product_list2.push(p3);

var p4=new Product();
    p4.setRequiredValues(4,
    'Firil Blouse',
    './collection/20210615_084702.jpg',
    149.00,
    'rgba(212, 14, 14, 1)',
     'men'
    );
product_list2.push(p4);
p4.makeUnseen();




var p5=new Product();
    p5.setRequiredValues(5,
    'Blouse',
    './collection/IMG_20250905_010206.jpg',
    296.00,
    'rgba(4, 62, 189, 1)',
     'women' 

    );
product_list2.push(p5);

var p6=new Product();
    p6.setRequiredValues(6,
    'Frock',
    './collection/IMG_20210904_17.jpg',
    200.00,
    'rgba(212, 14, 14, 1)',
     'girls' 

    );
product_list2.push(p6);

var p7=new Product();
    p7.setRequiredValues(7,
    'Blouse',
    './collection/20210721_182614.jpg',
    296.00,
    'rgba(10, 6, 6, 1)',
     'women' 
    );
product_list2.push(p7);
p7.makeUnseen();

var p8=new Product();
    p8.setRequiredValues(8,
    'Jhabela',
    './collection/IMG_20210811_125859.jpg',
    80.00,
    'rgba(7, 1, 56, 1)',
     'kids' 

    );
product_list2.push(p8);

var p9=new Product();
    p9.setRequiredValues(9,
    'Jhabela',
    './collection/IMG_20210912_115926.jpg',
    58.00,
    'rgba(29, 28, 28, 1)',
     'kids' 

    );
product_list2.push(p9);

var p10=new Product();
    p10.setRequiredValues(10,
    'Baby Jhabela',
     './collection/IMG_20210912_115848.jpg',
     60.00,
    'rgba(253, 99, 150, 1)',
     'kids' 

    );
product_list2.push(p10);

var p11=new Product();
    p11.setRequiredValues(11,
    'Baby Dress',
    './collection/IMG_20210811_125831.jpg',
    55.00,
    'rgba(255, 0, 119, 1)',
     'kids' 
    );
product_list2.push(p11);

var p12=new Product();
    p12.setRequiredValues(12,
    'Mask',
     './collection/20210701_202029.jpg',
     30.00,
    'rgba(133, 130, 6, 1)',
     'general' 

    );
product_list2.push(p12);
p12.makeSale();



        
  

