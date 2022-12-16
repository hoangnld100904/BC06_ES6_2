let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
function hienThiSanPham(array){
    var content= '';
    array.map(function(item){
        content+= `
        <div class="vglasses__items col-4">
        <img src="${item.src}">
        </div>
        `
    })
    document.getElementById('vglassesList').innerHTML=content;
}
hienThiSanPham(dataGlasses)

var glassItemButton= document.querySelectorAll('.vglasses__items');
// console.log(glassItemButton)
var modelGlass= document.getElementById('avatar')
var glassInfo= document.getElementById('glassesInfo');
var returnGlass;
glassItemButton.forEach( (item,index) => {
    
    item.addEventListener('click',()=>{
        // console.log(modelGlass)
        modelGlass.innerHTML= `<img src="${dataGlasses[index].virtualImg}"></img>`
        // console.log(modelGlass.innerHTML)
        glassInfo.innerHTML= `<h6 style="text-transform:uppercase; font-size:18px; font-weight: 500;margin-bottom:10px">${dataGlasses[index].name}</h6>
        <div class="priceAndStatus" style="margin-bottom:20px">
            <div class="btn btn-danger d-inline-block">$${dataGlasses[index].price}</div>
            <div class="status d-inline-block" style="color:green; margin-left:8px;">Stocking</div>
        </div>
        <div class="description">
            <p>${dataGlasses[index].description}</p>
        </div>`
        glassInfo.style.display= "block" 
        returnGlass= `<img src="${dataGlasses[index].virtualImg}"></img>`;  
    })
});

var removeGlasses = ()=>{
    // returnGlass=modelGlass;
    modelGlass.innerHTML=``
}
var returnGlasses = ()=>{
    // console.log(returnGlass)
    if (returnGlass!=undefined)
    modelGlass.innerHTML=returnGlass
}
var beforeButton= document.getElementById('beforeButton')
beforeButton.addEventListener('click',removeGlasses)
var afterButton= document.getElementById('afterButton')
afterButton.addEventListener('click',returnGlasses)

