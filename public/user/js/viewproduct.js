window.addEventListener("load",function(){
    let brand=document.getElementById("brand");
    let title=document.getElementById("title");
    let size_1=document.getElementById("size_1");
    let size_2=document.getElementById("size_2");
    let price=document.getElementById("price");
    let details=document.getElementById("details");
    let pro_img=document.getElementById("pro_img");
    let pro_img_1=document.getElementById("pro_img_1");
    let pro_img_2=document.getElementById("pro_img_2");
    let pro_img_3=document.getElementById("pro_img_3");

    let data=JSON.parse(localStorage.getItem("currentlySearched"));
    if(data!=null)
    {
        brand.innerHTML=data.Brand;
        title.innerHTML=data.Title;
        size_1.innerHTML=data.Size;
        size_2.innerHTML=data.Size;
        price.innerHTML="Rs "+data.Price;
        details.innerHTML=data.Details;
        pro_img.setAttribute("src",data.Image);
        pro_img_1.setAttribute("src",data.Image);
        pro_img_2.setAttribute("src",data.Image);
        pro_img_3.setAttribute("src",data.Image);

        let bag_btn=document.getElementById("bag_btn");
        bag_btn.addEventListener("click",function(){
            // localStorage.setItem("cart",JSON.stringify(data));
            // alert("Added to cart");
            let cart_data=JSON.parse(localStorage.getItem("cart"));
            if(cart_data==null || cart_data.length==0)
            {
                cart_data=[];

            }
            cart_data.push(data);
            localStorage.setItem("cart",JSON.stringify(cart_data));
            alert("Added to cart");
            
        });
    }
});