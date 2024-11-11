import { money } from "../scripts/util/price.js";

class Products{
#hello; // private field declaration

  constructor(details){
    this.id = details.id;
    this.image = details.image;
    this.name = details.name;
    this.rating = details.rating;
    this.priceCents = details.priceCents;
  }

  getStars(){
    return `images/ratings/rating-${this.rating.stars*10}.png`
  }

  getPrice(){
    return money(this.priceCents);
  }

  chart(){
    return '';
  }
}

class clothing extends Products{ //extends used for inheritance
  sizeChartLink;
  
  constructor(details){
    super(details);
    this.type = details.type;
    this.sizeChartLink = details.sizeChartLink;
  }

  chart(){
    return `<a href='${this.sizeChartLink}' target = '_blank'>Size chart</a>`;
  }
}

function new_fetch(){
  fetch('https://www.supersimplebackend.dev/products').then((response) => {
    return response.json();
  }).then((data)=>{
    data.forEach((detail)=>{
      if (detail.type === 'clothing') {
        products.push(new clothing(detail));
      } else {
        products.push(new Products(detail))}      
    })
  })
}
new_fetch()

export let products = []

export function loadProduct(fun) {
  let xhr = new XMLHttpRequest()
  let x = []
  xhr.addEventListener('load',()=>{
    JSON.parse(xhr.response).forEach((detail) => {
      if (detail.type === 'clothing') {
        x.push(new clothing(detail));
      } else {
        x.push(new Products(detail))}      
    });
    try{
      fun()
    }
    catch(error){
      console.log('No function provided')
    }
  })
  xhr.open('GET','https://www.supersimplebackend.dev/products')
  xhr.send()
  return x

}