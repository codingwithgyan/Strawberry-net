window.addEventListener("load",()=>{
    let type=document.getElementById("add_type_btn");
    let type_box=document.getElementById("addtype_273");

    let brand=document.getElementById("add_brand_btn");
    let brand_box=document.getElementById("addbrand_273");

    let product=document.getElementById("add_product_btn");
    let product_box=document.getElementById("addproduct_273");

    type.addEventListener("click",()=>{
            type_box.style.display="block";
            brand_box.style.display="none";
            product_box.style.display="none";
    });

    brand.addEventListener("click",()=>{
        type_box.style.display="none";
        brand_box.style.display="block";
        product_box.style.display="none";
    });

    product.addEventListener("click",()=>{
        type_box.style.display="none";
        brand_box.style.display="none";
        product_box.style.display="block";
    });

});