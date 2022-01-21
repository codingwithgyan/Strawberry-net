function navbar()
{
    return `
    <link rel="stylesheet" href="./user/css/navbar.css" />
    <div id="cont">
        <img src="https://i.ibb.co/TYXhCMm/Logo.jpg">
    
        <div>
            <span>
                <input type="text" placeholder="SEARCH BRAND/PRODUCT" id="searchBar"/>
                <button id="searchButton"><i class="fa fa-search" id="searchButtonIcon"></i></button>
            </span>
            <div id="search_div"></div>
                
            <div id="textBelowSearchBar">
               <!-- <span>
                    Natural Beauty<span id="textBelowSearchBar_Divider"></span>Estee Lauder<span
                        id="textBelowSearchBar_Divider"></span>Shiseido
                    <span id="textBelowSearchBar_Divider"></span>Double Serum
                </span> -->
                <div id="search_div"></div>
            </div>
        </div>
    
        <span style="display: inline-flex;" id="threeIconsInNavBar">
            <div id="signin_icon">
                <i class="fa fa-user-circle"></i>
            </div>
            <div id="wishlist_icon">
                <i class="fa fa-heart" ></i>
            </div>
            <div id="bag_icon">
                <a href="cart.html">
                <i class="fa fa-shopping-bag" id="bag_icon"></i>
                </a>
            </div>
        </span>
    
    
    </div>
    
    <nav id="navbar">
        <div class="navMenu"><a href="#">SHOP BY BRAND</a></div>
        <div class="navMenu"> <a href="#">SKINCARE</a></div>
        <div class="navMenu"><a href="#">MAKEUP</a></div>
        <div class="navMenu"><a href="#">HAIRCARE</a></div>
        <div class="navMenu"><a href="#">PERFUME</a></div>
        <div class="navMenu"><a href="#">MEN'S SKINCARE</a></div>
        <div class="navMenu"><a href="#">MEN'S COLOGNE</a></div>
        <div class="navMenu"><a href="#">HOME SCENTS</a></div>
        <div class="navMenu"><a href="#">NATURAL BEAUTY</a></div>
        <div class="navMenu"><a href="#">SPECIALS</a></div>
        <div class="navMenu"><a href="#">NEW</a></div>
    </nav>`
}

export default navbar();
