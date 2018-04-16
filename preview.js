class Preview {
    constructor(data_obj, filter) {
        this.data_obj = data_obj;
        this.filter = filter;
    }

    get data_obj() {
        return this._data_obj;
    }

    set data_obj(data_obj) {
        this._data_obj = data_obj;
    }

    buildProductPreview(block) {
        const div = document.createElement('div');
        div.classList.add('product-preview');
        block.appendChild(div);

        this.creatPreviewImg(div);

        const info = document.createElement('div');
        info.style.width = "85%";
        info.style.margin = "auto";
        div.appendChild(info);

        /// span with name of product
        if (this.data_obj.type === "product") {
            Preview.createRegTextLine(this.data_obj.product_name, info);

            const br = document.createElement('br');
            info.appendChild(br);
        }

        /// span with name of artist
        Preview.createRegTextLine(this.data_obj.name, info);

        const br1 = document.createElement('br');
        info.appendChild(br1);

        /// span with price
        if (this.data_obj.type === "product")
            Preview.createRegTextLine(`$ ${this.data_obj.price}`, info);


        /// div with rating and reviews
        const div1 = document.createElement('div');
        div1.style.width = "100%";
        div1.style.minHeight = "10px";
        div1.classList.add('unit-text');
        info.appendChild(div1);

        Preview.createRegTextLine(this.data_obj.rating, div1);
        Preview.createRegTextLine(`${this.data_obj.reviews.length} reviews`, div1);
    }

    creatPreviewImg(parent) {
        const div = document.createElement('div');
        div.classList.add('img-box');
        parent.appendChild(div);

        const img = document.createElement('img');
        img.classList.add('preview-img');
        img.setAttribute("src", this.data_obj.preview_img);
        div.appendChild(img);
    }

    static createRegTextLine(text, parent) {
        const span_name = document.createElement('span');
        span_name.textContent = text;
        span_name.classList.add('normal');
        parent.appendChild(span_name);
    }
}

// Products Page
let filteredProducts = products_obj

let newUnitDiv = () => {
  let div = document.createElement('div')
  div.classList.add('content')
  div.classList.add('unit')
  return div
}

let newProduct = (data,index,div)=> {
  const product = new Preview(data[index]);
  product.buildProductPreview(div);
  return product
}

function loadProducts(){
  const select = document.querySelector("select")
  const products = document.querySelector("#products");
  while (products.firstElementChild) products.removeChild(products.firstElementChild)

  let div = newUnitDiv()
  filteredProducts.forEach((el,idx,array)=>{
    if (idx % 4 < 3) {
      const product = newProduct(array, idx, div)
    } else {
      const product = newProduct(array, idx, div)
      products.appendChild(div)
      div = newUnitDiv()
    }
    if (idx % 4 || array.length < 4) products.appendChild(div)
  })
}

let sortByKey = (array,key)=>{
  array.sort((a,b)=> a[key] < b[key] ? -1 : 1)
  loadProducts()
}


let createOptions = () => {
  const select = document.querySelector("select")
  while(select.firstElementChild.nextElementSibling) select.removeChild(select.lastElementChild)

  const uniqueArtists = products_obj.reduce((acc,product)=>{
    if (!acc[product.name]) acc[product.name] = product
    return acc
  },{})
  Object.keys(uniqueArtists)
  .sort((a,b) => a < b ? -1 : 1)
  .map(name => {
    const option = document.createElement("option")
    option.value = name
    option.innerText = name
    select.appendChild(option)
    return name
  })
}


document.addEventListener("click",(event)=>{
  if (event.target.id === "sort-by-id") {
    sortByKey(filteredProducts,'id')
    scrollTo(0,0)
  }
  if (event.target.id === "sort-by-artist") {
    sortByKey(filteredProducts,'name')
    scrollTo(0,0)
  }
  if (event.target.id === "sort-by-name") {
    sortByKey(filteredProducts,'product_name')
    scrollTo(0,0)
  }
  if (event.target.id === "sort-by-price") {
    sortByKey(filteredProducts,'price')
    scrollTo(0,0)
  }
  if (event.target.id === "sort-by-rating") {
    sortByKey(filteredProducts,'rating')
    scrollTo(0,0)
  }
})

const select = document.querySelector("select")
select.addEventListener("change", ()=>{
  let name = select.children[select.selectedIndex].value
  if (name !== 'All Artists') {
    filteredProducts = products_obj.filter(product => product.name === name)
  } else {
    filteredProducts = products_obj
  }
  loadProducts()
})

createOptions()
