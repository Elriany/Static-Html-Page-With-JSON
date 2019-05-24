var divElem=document.getElementById("mydiv");
count = 0;
for(i=0;i<myData.length;i++){
    if(myData[i].status == "true")
    {
        var div=document.createElement("div");
        div.setAttribute("style","background-color:#3ae8a8;width:480px;height:350px;margin:20px;float:left;");
        var parag=document.createElement("p");
        parag.setAttribute("style","color:#f10a5f;padding:10px;font-size:22px;font-style: italic;font-family: monospace;");
        parag.setAttribute("class","text-center");
        var img=document.createElement("img");
        img.setAttribute("src",myData[i].propdimg);
        img.setAttribute("style","width:480px;height:210px;");
        parag.innerText="Product Name: "+myData[i].prodName+"\n"+"Expiration Date: "+myData[i].expDate+"\n"
                       +"Production Date: "+myData[i].productionDate+"\n"+"Discount: "+myData[i].discount;
        div.appendChild(img);
        div.appendChild(parag);
       divElem.appendChild(div);
    }
        
}
