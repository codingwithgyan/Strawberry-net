//select elements
const productsEl = document.querySelector("#products");

//render the products

function renderProducts() {
    let data=JSON.parse(localStorage.getItem("data"));
    if(data!=null && data.length>0)
    {

        data.forEach( (data) => {
            let div1=document.createElement("div");
            div1.setAttribute("class","content1");
            
            let div2=document.createElement("div");
            div2.setAttribute("class","content1-img");
            let i1=document.createElement("i");
            i1.setAttribute("class","far fa-heart fav");
            let img1=document.createElement("img");
            img1.setAttribute("class","data-image");
            img1.setAttribute("src",data.Image);
            let div3=document.createElement("div");
            div3.setAttribute("class","des1");
            let p1=document.createElement("p");
            p1.innerHTML="HOLIDAY HOLLY BUYS";
            div3.append(p1);
    
            let div4=document.createElement("div");
            div4.setAttribute("class","name");
            let p2=document.createElement("p");
            p2.setAttribute("class","data-name");
            let str1=document.createElement("strong");
            str1.innerHTML=data.Brand;
            p2.append(str1);
            let p3=document.createElement("p");
            p3.setAttribute("class","subhead");
            p3.innerHTML=data.Title;
            div4.append(p2,p3);
    
            let div5=document.createElement("div");
            div5.setAttribute("class","amount");
            let p4=document.createElement("p");
            p4.setAttribute("class","save");
            p4.innerHTML=data.Discount+"%";
            let p5=document.createElement("p");
            p5.setAttribute("class","amt");
            p5.innerHTML=data.Price;
            div5.append(p4,p5);
    
            let div6=document.createElement("div");
            div6.setAttribute("class","addToCart");
            let btn1=document.createElement("button");
            btn1.setAttribute("class","bag-btn");
            btn1.innerHTML="Add to bag";
            btn1.addEventListener("click",function(){
            let cart_data=JSON.parse(localStorage.getItem("cart"));
            if(cart_data==null || cart_data.length==0)
            {
                cart_data=[];

            }
            cart_data.push(data);
            localStorage.setItem("cart",JSON.stringify(cart_data));
                alert("Added to cart");
            });
            let p6=document.createElement("p");
            p6.setAttribute("class","subhead-btn");
            p6.innerHTML="Extra 8% off Everything";
            div6.append(btn1,p6);
            
            

            let div7=document.createElement("div");
            div7.setAttribute("class","poster");
            div7.setAttribute("value",data.Title);
            div7.addEventListener("click",function(){
                var text=this.getAttribute("value");
                console.log(data);
                localStorage.setItem("currentlySearched",JSON.stringify(data));
                window.location.href="ViewProduct.html";
            });

            div7.append(i1,img1,div3,div4,div5);
            div2.append(div7,div6);
            div1.append(div2);
            productsEl.append(div1);
    
           
        });
    }
    
}

renderProducts();