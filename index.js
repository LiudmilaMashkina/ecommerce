function loadIndex(){
    /// creating section with artists
    const artists = document.querySelector("#artists-block");
    /// creating section with products
    const products = document.querySelector("#products-block");
    /// creating section with charities
    const charities = document.querySelector("#charities-block");
  
    for(let i = 0; i < 4; ++i){
        const artist = new Preview(artists_obj[i]);
        artist.buildProductPreview(artists);
  
        const product = new Preview(products_obj[i]);
        product.buildProductPreview(products);
  
        const charity = new Preview(charities_obj[i]);
        charity.buildProductPreview(charities);
    }
  }