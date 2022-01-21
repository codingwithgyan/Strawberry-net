let footer=()=>{
   return`
   <link rel="stylesheet" href="./user/css/footer.css" />
   <footer>
        <div id="footerContainer1">

            <div class="footerPart1">
                <p class="stay">STAY CONNECTED</p>
                <input class="fText" type="text" placeholder="Enter your email for exclusive offers">
                <input class="fBtn" type="button" value="SIGN UP">

                <div id="fSocialIcons">
                    <a href="https://www.facebook.com/pages/StrawberryNET/56607929065" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/strawberrynet" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.pinterest.com/strawberrynet/" target="_blank"><i class="fab fa-pinterest"></i></a>
                    <a href="https://www.instagram.com/strawberrynetofficial/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/user/TheStrawberryNET" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>

            </div>

            <div class="footerPart2">
                <div class="f1img">
                    <img src="https://lh3.googleusercontent.com/Liwrls1S0fh-Sly-BwGRzvg6pG2X7bnzJTDAfNRcMNIii4QTM2D_ojQpgmVZq_sXTYnRuGB9wBxJkVTtYiwiIw1e6ROgJKmYYykxCV0" alt="">
                </div>

                <div class="fContent">
                    <p>Over</p>
                    <h2>33000</h2>
                    <p>products from</p>
                    <p>
                    <h2>800</h2>brands</p>
                </div>
            </div>

            <div class="footerPart3">
                <div class="f2img">
                    <img src="https://lh3.googleusercontent.com/nWYHrQUoHocMVu8PqkzGqDBXCODXLF_hk5fnMAlaXctXI1Cv_c072ot6w9NixKO3ScElYuwld0e5lp7BcCG3G53saT68X-wr1kcW1CUw" alt="">
                    <div class="fContent2">
                        <h2>FREE Shipping</h2>
                        <h2>Anywhere</h2>
                        <p>in the
                        <h2>world!</h2>
                        </p>
                        <p class="conditions">Conditions apply</p>

                    </div>
                </div>
            </div>

        </div>

        <div id="footerContainer2">
            <div id="fContents">
                <div class="fPart1">
                    <ul>
                        <li><a href="#">SHIPPING & TAX</a></li>
                        <li><a href="#">RETURN POLICY</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li class="con-cur"><a href="#">CHANGE COUNTRY/CURRENCY</a></li>

                    </ul>

                    <hr class="hr">
                </div>

                <div class="fPart2">
                    <div class="sec1">
                        <p class="fHead">PAY WITH:</p>
                        <div id="con1" class="content-f">
                            <img src="https://a.cdnsbn.com/images/common/Visa_16.png" alt="">
                            <img src="https://a.cdnsbn.com/images/common/Master_16.png" alt="">
                            <img src="https://a.cdnsbn.com/images/common/Paypal_16.png" alt="">
                            <img src="https://a.cdnsbn.com/images/common/JCB_16.png" alt="">
                            <img src="https://a.cdnsbn.com/images/common/AmericanExpress_16.png" alt="">
                            <img src="https://a.cdnsbn.com/images/common/Discover_16.png" alt="">
                            <img src="https://a.cdnsbn.com/images/common/DiscoverMore.png" alt="">
                        </div>
                    </div>
                    <div class="sec2">
                        <p class="fHead">MY ACCOUNT</p>
                        <div class="content-f">
                            <ul>
                                <li><a href="">Track Order</a></li>
                                <li><a href="">Order History</a></li>
                                <li><a href="">My Reviews</a></li>
                                <li><a href="">Birthday Treat Program</a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="sec3">
                        <p class="fHead">OUR COMPANY</p>
                        <div class="content-f">
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Points Rewards Program</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Affiliates</a></li>
                                <li><a href="">Partners</a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="sec4">
                        <p class="fHead">DOWNLOAD</p>
                        <div class="content-f">
                            <ul>
                                <li><a target="_blank" href="https://itunes.apple.com/hk/app/strawberrynet.com/id436735308?mt=8"><img class="IP"
                                            src="data:image/png;base64,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"
                                            alt=""></a></li>
                                <li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.strawberrynetNew.android"><img class="IP" src="https://data.ibtimes.sg/en/full/12247/google-play-store-8-1-73-apk.png" alt=""></a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="sec5">
                        <p class="fHead">RATED EXCELLENT</p>
                        <div class="content-f">
                            <h3>9.0 out of 10!</h3>
                            <img src="https://a.cdnsbn.com/images/common/HK-Trust-Mark_resize.png" alt="">
                        </div>
                    </div>

                </div>

                <div class="fPart3">
                    <div class="fPart3-1">
                        <h2>Excellent</h2>
                        <img src="https://cdn.sofasandsectionals.com/static/Trustpilot_ratings_4halfstar-RGB.png" alt="">
                        <span>
                            <p>Based on <a href="https://www.trustpilot.com/review/www.strawberrynet.com?utm_medium=trustbox&utm_source=Carousel">24,930 reviews</a></p>
                        </span>
                    </div>
                    <div class="fPart3-1">
                        <img style="width:100px;" src="https://cdn.sofasandsectionals.com/static/Trustpilot_ratings_4halfstar-RGB.png" alt="">
                        <p>Excellent Service</p>
                        <p style="margin-top: 15px; color: rgb(163, 163, 207);">Dion</p>
                    </div>
                    <div class="fPart3-1">
                        <img style="width:100px;" src="https://cdn.sofasandsectionals.com/static/Trustpilot_ratings_4halfstar-RGB.png" alt="">
                        <p>Easy to order</p>
                        <p style="margin-top: 15px; color: rgb(163, 163, 207);">Lily Grey</p>
                    </div>
                    <div class="fPart3-1">
                        <img style="width:100px;" src="https://cdn.sofasandsectionals.com/static/Trustpilot_ratings_4halfstar-RGB.png" alt="">
                        <p>Easy to work with</p>
                        <p style="margin-top: 15px; color: rgb(163, 163, 207);">James White</p>
                    </div>



                </div>
                <hr class="hr hr1">

                <div class="fPart4">
                    <ul>
                        <li>Privacy & Security</li>
                        <li>Terms & Conditions</li>
                        <li>Point Rewards Program Terms & Conditions</li>
                    </ul>
                    <p>1998 - 2021 © StrawberryNET.com All Rights Reserved.</p>
                </div>
            </div>

    </footer>`

}

export {footer};