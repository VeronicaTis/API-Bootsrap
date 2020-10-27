//the div that will hold all of the card divs
const cards = document.querySelector('.cards');



////////Create our Request to server
let adver = new XMLHttpRequest();
adver.open('GET','http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick');
///////send server request////////////////////////////////////////////////////////

adver.onload = ()=>{

///////Body of the callback where we parse data and use DOM Manipulation//////////
    console.log(adver);        
    const data = JSON.parse(adver.response);
    console.log(data[0].image_link);
    for(var i = 0; i < data.length-1; i++)
    {
        //the outside card div to hold the image and card body
        var asd = document.createElement('div');
        asd.className = "col mb-4 divid";
        asd.setAttribute('id', 'fv');
        asd.style.width = "30rem ";
        asd.style.float = "left";
        asd.style.maxHeight = "50rem";
        //the card div that holds the image
        var sdf = document.createElement('div');
        sdf.className = "card";
        //the image that is being appened to the card div
        var qwe = document.createElement('img');
        qwe.setAttribute('src', data[i].image_link);
        qwe.style.width = "100%";
        qwe.style.height = "70%";
        // the card body that is being appended to the car div
        var dfg = document.createElement('div');
        dfg.className = "card-body";
        dfg.style.height = "25%";
        //the name tag inside of the card body
        var tyu = document.createElement('h5');
        tyu.className = "card-title brand";
        var yui = document.createTextNode("Name: " + data[i].name);
        //the brand tag that is inside of the card body
        var fgh = document.createElement('h5');
        fgh.className = "card-title brand";
        var wer = document.createTextNode("Brand: " + data[i].brand);
        //the price tag that is inside of the card body
        var ghj = document.createElement('h5');
        ghj.className = "card-title price";
        var ert = document.createTextNode("Price: " + data[0].price_sign + data[i].price);
        //the description of the product that is inside of the card body
        var hjk = document.createElement('p');
        hjk.className = "card-text des";
        var rty = document.createTextNode("Description: " + data[i].description);
        
        //the text node for the brand tag being appened to the brand tag
        fgh.appendChild(wer);
        //the text node for the price tag being appened to the price
        ghj.appendChild(ert);
        //the text node for the description tage being appeneded to the description
        hjk.appendChild(rty);
        //all of the title tags and the description being appened to the card body
        dfg.appendChild(tyu);
        dfg.appendChild(fgh);
        dfg.appendChild(ghj);
        dfg.appendChild(hjk);
        //the textnode for the name tag being appened to the name tag
        tyu.appendChild(yui);
        //the image and the card body being appended to the card div
        sdf.appendChild(qwe);
        sdf.appendChild(dfg);
        //the card being appeneded to the outside card div
        asd.appendChild(sdf);
        //the oustide div card being appeneded to the cards div
        cards.appendChild(asd);
        //a style for the card body to have a scroll bar
        document.getElementsByClassName('card-body')[i].style.setProperty('overflow', 'scroll', 'important');
        
        //document.querySelectorAll(".brand")[x] = data[i].brand;
    }
///////Else if clause where we throw an error if we dont have success connecting//
     


};
///////open server request////////////////////////////////////////////////////////

adver.send();




//FOUNDATION
//the div that will hold all of the card divs
const cards2 = document.querySelector('.cards2');



////////Create our Request to server
let adver1 = new XMLHttpRequest();
adver1.open('GET','http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation');
///////send server request////////////////////////////////////////////////////////

adver1.onload = ()=>{

///////Body of the callback where we parse data and use DOM Manipulation//////////
    console.log(adver1);        
    const data = JSON.parse(adver1.response);
    console.log(data[0].image_link);
    for(var i = 0; i < data.length-1; i++)
    {
        //the outside card div to hold the image and card body
        var asd = document.createElement('div');
        asd.className = "col mb-4 divid";
        asd.setAttribute('id', 'fv');
        asd.style.width = "30rem ";
        asd.style.float = "left";
        asd.style.maxHeight = "50rem";
        //the card div that holds the image
        var sdf = document.createElement('div');
        sdf.className = "card";
        //the image that is being appened to the card div
        var qwe = document.createElement('img');
        qwe.setAttribute('src', data[i].image_link);
        qwe.style.width = "100%";
        qwe.style.height = "70%";
        // the card body that is being appended to the car div
        var dfg = document.createElement('div');
        dfg.className = "card-body";
        dfg.style.height = "25%";
        //the name tag inside of the card body
        var tyu = document.createElement('h5');
        tyu.className = "card-title brand";
        var yui = document.createTextNode("Name: " + data[i].name);
        //the brand tag that is inside of the card body
        var fgh = document.createElement('h5');
        fgh.className = "card-title brand";
        var wer = document.createTextNode("Brand: " + data[i].brand);
        //the price tag that is inside of the card body
        var ghj = document.createElement('h5');
        ghj.className = "card-title price";
        var ert = document.createTextNode("Price: " + data[0].price_sign + data[i].price);
        //the description of the product that is inside of the card body
        var hjk = document.createElement('p');
        hjk.className = "card-text des";
        var rty = document.createTextNode("Description: " + data[i].description);
        
        //the text node for the brand tag being appened to the brand tag
        fgh.appendChild(wer);
        //the text node for the price tag being appened to the price
        ghj.appendChild(ert);
        //the text node for the description tage being appeneded to the description
        hjk.appendChild(rty);
        //all of the title tags and the description being appened to the card body
        dfg.appendChild(tyu);
        dfg.appendChild(fgh);
        dfg.appendChild(ghj);
        dfg.appendChild(hjk);
        //the textnode for the name tag being appened to the name tag
        tyu.appendChild(yui);
        //the image and the card body being appended to the card div
        sdf.appendChild(qwe);
        sdf.appendChild(dfg);
        //the card being appeneded to the outside card div
        asd.appendChild(sdf);
        //the oustide div card being appeneded to the cards div
        cards2.appendChild(asd);
        //a style for the card body to have a scroll bar
        document.getElementsByClassName('card-body')[i].style.setProperty('overflow', 'scroll', 'important');
        //document.querySelectorAll(".brand")[x] = data[i].brand;
    }
///////Else if clause where we throw an error if we dont have success connecting//
     


};
///////open server request////////////////////////////////////////////////////////

adver1.send();



//BLUSH
//the div that will hold all of the card divs
const cards3 = document.querySelector('.cards3');



////////Create our Request to server
let adver2 = new XMLHttpRequest();
adver2.open('GET','http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush');
///////send server request////////////////////////////////////////////////////////

adver2.onload = ()=>{

///////Body of the callback where we parse data and use DOM Manipulation//////////
    console.log(adver2);        
    const data = JSON.parse(adver2.response);
    console.log(data[0].image_link);
    for(var i = 0; i < data.length-1; i++)
    {
        //the outside card div to hold the image and card body
        var asd = document.createElement('div');
        asd.className = "col mb-4 divid";
        asd.setAttribute('id', 'fv');
        asd.style.width = "30rem ";
        asd.style.float = "left";
        asd.style.maxHeight = "50rem";
        //the card div that holds the image
        var sdf = document.createElement('div');
        sdf.className = "card";
        //the image that is being appened to the card div
        var qwe = document.createElement('img');
        qwe.setAttribute('src', data[i].image_link);
        qwe.style.width = "100%";
        qwe.style.height = "70%";
        // the card body that is being appended to the car div
        var dfg = document.createElement('div');
        dfg.className = "card-body";
        dfg.style.height = "25%";
        //the name tag inside of the card body
        var tyu = document.createElement('h5');
        tyu.className = "card-title brand";
        var yui = document.createTextNode("Name: " + data[i].name);
        //the brand tag that is inside of the card body
        var fgh = document.createElement('h5');
        fgh.className = "card-title brand";
        var wer = document.createTextNode("Brand: " + data[i].brand);
        //the price tag that is inside of the card body
        var ghj = document.createElement('h5');
        ghj.className = "card-title price";
        var ert = document.createTextNode("Price: " + data[0].price_sign + data[i].price);
        //the description of the product that is inside of the card body
        var hjk = document.createElement('p');
        hjk.className = "card-text des";
        var rty = document.createTextNode("Description: " + data[i].description);
        
        //the text node for the brand tag being appened to the brand tag
        fgh.appendChild(wer);
        //the text node for the price tag being appened to the price
        ghj.appendChild(ert);
        //the text node for the description tage being appeneded to the description
        hjk.appendChild(rty);
        //all of the title tags and the description being appened to the card body
        dfg.appendChild(tyu);
        dfg.appendChild(fgh);
        dfg.appendChild(ghj);
        dfg.appendChild(hjk);
        //the textnode for the name tag being appened to the name tag
        tyu.appendChild(yui);
        //the image and the card body being appended to the card div
        sdf.appendChild(qwe);
        sdf.appendChild(dfg);
        //the card being appeneded to the outside card div
        asd.appendChild(sdf);
        //the oustide div card being appeneded to the cards div
        cards3.appendChild(asd);
        //a style for the card body to have a scroll bar
        document.getElementsByClassName('card-body')[i].style.setProperty('overflow', 'scroll', 'important');
        //document.querySelectorAll(".brand")[x] = data[i].brand;
    }
///////Else if clause where we throw an error if we dont have success connecting//
     


};
///////open server request////////////////////////////////////////////////////////

adver2.send();