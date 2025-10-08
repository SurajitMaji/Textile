

// category fetch
let cat_area=document.getElementById('dress_category');
let total_cat=15;
let catImgFolder='./assets/';
let catArray=[
    ['Men', 'cc4e8496ac5e3e23c94d99b4bc9c1a1f.jpg'],
    ['Women', '46ee619c4e9a7ef84094381a5e83dbfe.jpg'],
    ['Kids', 'IMG20220424100630.jpg'],
    ['Girls', 'a308c77ddba35de29e5dbfbdc8d15793.jpg'],
    ['General', 'ripcurl_012wdr_rip-0090_4.jpg'],
    ['Punjabi' ,'magastic-men.jpg'],
    ['Kurti', 'longChuridar.jpg'],
    ['Frock', 'IMG_20210904_175932.jpg'],
    ['Uniform', 'pngtree-girls-wearing-elementary-school-uniforms-are-happy-png-image_9204939.png'],
    ['Casual','chennai-international-fashion-week-2012-26553384.jpg' ],
    ['Smart', 'de522f4280741e3e47242ec1a58ab812.jpg'],
    ['Bussiness', '22537cc220604a1f98160223323cb450.jpg'],
    ['Saree', '8a4931129c4bca51bbafa10087f28332.jpg'],
    ['Creative', 'b2d55fe4e18775a6146fb5c5d7b26f78.jpg'],
    ['Traditipnal', 'village-man-cartoon-character-design_712332-2791.jpg'],
    ['Religion', 'IMG-20241011-WA0027.jpg'],
    ['Weeding', '637c7d39789d62c188d9d445d3af69ab.jpg'],
    ['Professional' ,'c78d5b072ba8f02eeb6506ccc34120d5--corporate-wear-dresses-for-work.jpg'],
    ['Sports','img_1_1749709479275.jpg'],
    ['Medical', 'c5a3904b38eb241dd03dd30889599dc4.jpg']

];
let genImg=catImgFolder+'46ee619c4e9a7ef84094381a5e83dbfe.jpg';
for(let i=0;i<catArray.length;i++){
    let imgSRC=catImgFolder+catArray[i][1];
    if(catArray[i][1]==null){
        imgSRC=genImg;
        console.log(imgSRC);
    }
    cat_area.innerHTML+=`
        <a href="" class="each-cat">
            <div class="cat-image-area">
                <img src="${imgSRC}" alt="" srcset="">
            </div>
            <div class="cat-name">${catArray[i][0]}</div>
        </a>
    `;
}


// febric category set up 
let fab_area=document.getElementById('fabrics_area');
let fabArray=[
    ['Cotton', 'sustainable-fabrics-organic-cotton-luxe-digital.jpg'],
    ['Silk', 'pexels-photo-5851808.jpeg'],
    ['Wool', '968ff6e71ae2571dc6f3abc074995bfd.jpg'],
    ['Baize', 'istockphoto-1221852514-612x612.jpg'],
    ['Denim', '1000_F_5125394_44DBzqEaEVzDX51xDv47miI3wVrJRkKL.jpg'],
    ['Drill', 'drill-fabrics-1000x1000.jpg'],
    ['Georgette', 'buy-georgette-fabric-6806007_1280.jpg'],
    ['Cotton Twill', 'Twill-Fabric.jpg']
];
for(let i=0;i<fabArray.length;i++){
    
    let imgSRC=catImgFolder+fabArray[i][1];
    fab_area.innerHTML+=`
    <a href="#" class="each-fabric">
        <div class="fabric-image-area">
            <img src="${imgSRC}" alt="Fabric Image" srcset="">
        </div>
        <div class="fabric-name">
            ${fabArray[i][0]}
        </div>
    </a>
    `;
}