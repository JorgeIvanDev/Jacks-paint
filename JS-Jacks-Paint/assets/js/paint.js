function configureListeners() {
    let images = document.querySelectorAll('img')


     for (var i = 0; i < images.length; i++) {    
         images[i] .addEventListener('mouseover', function(e){
             addOpacity(e)
         })
         images[i].addEventListener('mouseover', function(e){
             removeOpacity(e)
         })
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    event.target.style.opacity = "0.5"
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    event.target.style.opacity = "1"
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':    
            price = "14.99" 
            colorName = "lime green"
            updatePrice(colorName, price)      
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = "11.14" 
            colorName = "medium brown"
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = "22.99" 
            colorName = "royal blue"
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = "4.99" 
            colorName = "solid black"
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = "8.22" 
            colorName = "solid cyan"
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = "11.99" 
            colorName = "solid purple"
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = "13.42" 
            colorName = "solid red"
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = "21.98" 
            colorName = "solid white"
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = "14.99" 
            colorName = "solid yellow"
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById("color name")
        colorPrice.textContent = price
        // select element with corresponding id
        // display price
        
        let color = document.getElementById("color-price")// select element with corresponding id
        color.textContent = colorName//display color name
    }
    
}
