import React from 'react';
import one from '../img/slide/one.jpg';
import two from '../img/slide/two.jpg';
import three from '../img/slide/three.jpg';

const Home = () => {
    return (
        <>
              {/* <!-- section-hero-posts--> */}
            <div class="hero-header">
                {/* <!-- Hero Slider--> */}
                <div id="hero-slider" class="hero-slider">

                    {/* <!-- Item Slide--> */}
                    <div class="item-slider" style={{background:`url(${three})`}}>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="info-slider">
                                        <h1>Group Stage Breakdown</h1>
                                        <p>While familiar with fellow European nation France, Hareide admits that South American side Peru.</p>
                                        <a href="#" class="btn-iw outline">Read More <i class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Item Slide--> */}

                    {/* <!-- Item Slide--> */}
                    <div class="item-slider" style={{background:`url(${two})`}}>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="info-slider">
                                        <h1>World Cup rivalries reprised</h1>
                                        <p>The outdoor exhibition on Manezhnaya Square comprises 11 figures that symbolise the main sites of interest.</p>
                                        <a href="#" class="btn-iw outline">Read More <i class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Item Slide--> */}

                    {/* <!-- Item Slide--> */}
                    <div class="item-slider" style={{backgroundImage:`url(${one})`}}>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="info-slider">
                                        <h1>Group Stage Breakdown</h1>
                                        <p>While familiar with fellow European nation France, Hareide admits that South American side Peru.</p>
                                        <a href="#" class="btn-iw outline">Read More <i class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Item Slide--> */}

                </div>
                {/* <!-- End Hero Slider--> */}
            </div>
            {/* <!-- End section-hero-posts--> */}

            {/* <!-- Section Area - Content Central --> */}
            <section class="content-info">

                {/* <!-- White Section --> */}
                <div class="white-section paddings">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                <img src="img/locations/1.jpg" alt=""/>
                            </div>
                            <div class="col-lg-7">
                                <h4 class="subtitle">
                                   <span>Company Value</span>
                                    Who Are We?
                                </h4>
                                <p>The top seeds in Groups C and D both have designs on winning their respective sections. But if one of them advances as a group winner and the other as a runner-up, then we will be seeing Lionel Messi facing off against Antoine Griezmann either in Kazan (30 June) or Nizhny Novgorod (1 July), depending on their team???s group placings.</p>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <h5>Our Mission</h5>
                                        <p>Lorem iur adipiscing elit. Ut vehicula dapibus augue nec maximustiam eleifend magna erat, quis vestibulum lacus mattis sit ametec pellentesque lorem sapien.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <h5>Our Vision</h5>
                                        <p>Lorem iur adipiscing elit. Ut vehicula dapibus augue nec maximustiam eleifend magna erat, quis vestibulum lacus mattis sit ametec pellentesque lorem sapien.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End White Section --> */}

                {/* <!-- Parallax Section - Testimonials --> */}
                <div class="parallax-section parallax-total" style={{background:`url(${three})`}}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-12">
                                <div class="text-center padding-bottom">
                                    <h2>We have earned the trust of <span class="text-resalt">25,869</span> Club Members.</h2>
                                    <p>Duis non lorem porta,  eros sit amet, tempor sem. semper a tempus et.</p>
                                </div>

                                <ul class="testimonials testimonials-carousel">
                                    <li>
                                        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque!.</p>
                                        <img src="img/testimonials/1.jpg" alt=""/>
                                        <strong>Federic Gordon</strong><a href="#">@iwthemes</a></blockquote>
                                    </li>
                                    <li>
                                        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque!.</p>
                                        <img src="img/testimonials/2.jpg" alt=""/>
                                        <strong>Federic Gordon</strong><a href="#">@iwthemes</a></blockquote>
                                    </li>
                                    <li>
                                        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque!.</p>
                                        <img src="img/testimonials/3.jpg" alt=""/>
                                        <strong>Federic Gordon</strong><a href="#">@iwthemes</a></blockquote>
                                    </li>
                                    <li>
                                        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque!.</p>
                                        <img src="img/testimonials/4.jpg" alt=""/>
                                        <strong>Federic Gordon</strong><a href="#">@iwthemes</a></blockquote>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Gray Section - Testimonials --> */}

                {/* <!-- White Section --> */}
                <div class="white-section paddings">
                    <div class="container">

                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <h3 class="clear-title no-margin">Sports Gallery</h3>
                            </div>

                            <div class="col-lg-8">
                                {/* <!-- Nav Filters --> */}
                                <div class="portfolioFilter no-margin no-bg pull-right">
                                    <a href="#" data-filter="*" class="current">All</a>
                                    <a href="#" data-filter=".soccer">Soccer</a>
                                    <a href="#" data-filter=".moto">Skate</a>
                                    <a href="#" data-filter=".bmx">Tennis</a>
                                </div>
                                {/* <!-- End Nav Filters --> */}
                            </div>
                        </div>


                        <div class="row portfolioContainer margin-top">

                            {/* <!-- Item Gallery --> */}
                            <div class="col-sm-6 col-lg-4 col-xl-3 soccer">
                                <div class="item-gallery">
                                    <div class="hover small">
                                        <img src="img/slide/three.jpg" alt="Club Team" />
                                        <a class="swipebox-ligbox"  href="img/clubs-teams/colombia.jpg">
                                            <div class="overlay"><i class="fa fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <div class="info-gallery">
                                        <p>Soccer</p>
                                        <i class="fa fa-picture-o"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item Gallery --> */}


                            {/* <!-- Item Gallery --> */}
                            <div class="col-sm-6 col-lg-4 col-xl-3 moto">
                                <div class="item-gallery">
                                    <div class="hover small">
                                        <img src="img/blog/3.jpg" alt="Club Team" />
                                        <a class="swipebox-ligbox"  href="img/clubs-teams/rusia.jpg">
                                            <div class="overlay"><i class="fa fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <div class="info-gallery">
                                        <p>Moto Cross</p>
                                        <i class="fa fa-picture-o"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item Gallery --> */}

                            {/* <!-- Item Gallery --> */}
                            <div class="col-sm-6 col-lg-4 col-xl-3 soccer">
                                <div class="item-gallery">
                                    <div class="hover small">
                                        <img src="img/blog/1.jpg" alt="Club Team" />
                                        <a class="swipebox-ligbox"  href="img/clubs-teams/brazil.jpg">
                                            <div class="overlay"><i class="fa fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <div class="info-gallery">
                                        <p>Soccer</p>
                                        <i class="fa fa-picture-o"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item Gallery --> */}

                            {/* <!-- Item Gallery --> */}
                            <div class="col-sm-6 col-lg-4 col-xl-3 moto">
                                <div class="item-gallery">
                                    <div class="hover small">
                                        <img src="img/blog/2.jpg" alt="Club Team" />
                                        <a class="swipebox-ligbox"  href="https://www.youtube.com/watch?v=AfOlAUd7u4o">
                                            <div class="overlay"><i class="fa fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <div class="info-gallery">
                                        <p>Moto Cross</p>
                                        <i class="fa fa-video-camera"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item Gallery --> */}

                            {/* <!-- Item Gallery --> */}
                            <div class="col-sm-6 col-lg-4 col-xl-3 soccer">
                                <div class="item-gallery">
                                    <div class="hover small">
                                        <img src="img/clubs-teams/argentina.jpg" alt="Club Team" />
                                        <a class="swipebox-ligbox"  href="https://www.youtube.com/watch?v=AfOlAUd7u4o">
                                            <div class="overlay"><i class="fa fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <div class="info-gallery">
                                        <p>Soccer</p>
                                        <i class="fa fa-video-camera"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item Gallery --> */}

                            {/* <!-- Item Gallery --> */}
                            <div class="col-sm-6 col-lg-4 col-xl-3 soccer">
                                <div class="item-gallery">
                                    <div class="hover small">
                                        <img src="img/clubs-teams/rusia.jpg" alt="Club Team" />
                                        <a class="swipebox-ligbox"  href="img/clubs-teams/rusia.jpg">
                                            <div class="overlay"><i class="fa fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <div class="info-gallery">
                                        <p>Soccer</p>
                                        <i class="fa fa-picture-o"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item Gallery --> */}

                            {/* <!-- Item Gallery --> */}
                            <div class="col-sm-6 col-lg-4 col-xl-3 bmx">
                                <div class="item-gallery">
                                    <div class="hover small">
                                        <img src="img/blog/4.jpg" alt="Club Team" />
                                        <a class="swipebox-ligbox"  href="img/clubs-teams/colombia.jpg">
                                            <div class="overlay"><i class="fa fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <div class="info-gallery">
                                        <p>Bmx</p>
                                        <i class="fa fa-picture-o"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item Gallery --> */}

                            {/* <!-- Item Gallery --> */}
                            <div class="col-sm-6 col-lg-4 col-xl-3 soccer">
                                <div class="item-gallery">
                                    <div class="hover small">
                                        <img src="img/clubs-teams/brazil.jpg" alt="Club Team" />
                                        <a class="swipebox-ligbox"  href="img/clubs-teams/brazil.jpg">
                                            <div class="overlay"><i class="fa fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <div class="info-gallery">
                                        <p>Soccer</p>
                                        <i class="fa fa-picture-o"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item Gallery --> */}

                        </div>
                    </div>
                </div>
                {/* <!-- End White Section --> */}

                {/* <!-- End gray Section --> */}
                <div class="default-section paddings">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-center padding-bottom">
                                    <h2>We have a great community, <span class="text-resalt">JOIN</span> now.</h2>
                                    <p>Duis non lorem porta,  eros sit amet, tempor sem. semper a tempus et.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Info Resalt--> */}
                    <div id="ri-grid" class="ri-grid ri-grid-size-2">
                        <img class="ri-loading-image" src="img/grid/loading.gif" alt="Image" />
                        <ul>
                            <li><a href="#"><img src="img/grid/1.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/2.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/3.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/4.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/5.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/6.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/7.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/8.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/9.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/10.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/11.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/12.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/13.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/14.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/15.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/16.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/1.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/2.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/3.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/4.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/5.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/6.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/7.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/8.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/9.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/10.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/11.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/12.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/13.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/14.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/15.jpg" alt="Image"/></a></li>
                            <li><a href="#"><img src="img/grid/16.jpg" alt="Image"/></a></li>
                        </ul>
                    </div>
                    {/* <!-- End Info Resalt--> */}

                    <div class="container">
                        <div class="row justify-content-center padding-top">
                            <a href="single-team.html" class="btn-iw">Volunteers</a>
                            <a href="contact.html" class="btn-iw outline skin">Make Donation</a>
                        </div>
                    </div>

                </div>
                {/* <!-- End Gray Section --> */}

                {/* <!-- Newsletter --> */}
                <div class="section-newsletter no-margin">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-center">
                                    <h2>Enter your e-mail and <span class="text-resalt">subscribe</span> to our newsletter.</h2>
                                    <p>Duis non lorem porta,  eros sit amet, tempor sem. Donec nunc arcu, semper a tempus et, consequat.</p>
                                </div>
                                <form id="newsletterForm" action="php/mailchip/newsletter-subscribe.php">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="fa fa-envelope"></i>
                                                </span>
                                                <input class="form-control" placeholder="Your Name" name="name"  type="text" required="required"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="fa fa-envelope"></i>
                                                </span>
                                                <input class="form-control" placeholder="Your  Email" name="email"  type="email" required="required"/>
                                                <span class="input-group-btn">
                                                    <button class="btn btn-primary" type="submit" name="subscribe" >SIGN UP</button>
                                                 </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div id="result-newsletter"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Newsletter --> */}
            </section>
            {/* <!-- End Section Area -  Content Central --> */}

            <div class="instagram-btn">
                <div class="btn-instagram">
                    <i class="fa fa-instagram"></i>
                    FOLLOW
                    <a href="#" target="_blank">&#64;whatwecreate</a>
                </div>
            </div>

            <div class="content-instagram">
                <div id="instafeed"></div>
            </div>
        </>
    )
}

export default Home;
