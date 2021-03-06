import React from 'react'
import banner from "../img/adds/banner.jpg";

const Navbar = () => {
    return (
        <>
           {/* <!-- Header--> */}
            <header>
                {/* <!-- End headerbox--> */}
                <div class="headerbox">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            {/* <!-- Logo--> */}
                            <div class="col">
                               <div class="logo">
                                   <a href="index.html" title="Return Home">
                                        <img src="img/logo.png" alt="Logo" class="logo_img"/>
                                    </a>
                               </div>
                            </div>
                            {/* <!-- End Logo--> */}

                            {/* <!-- Adds Header--> */}
                            <div class="col">
                                <div class="adds">
                                    <a href="" target="_blank">
                                        <img src={banner} alt="adverts" class="img-responsive"/>
                                    </a>
                                </div>

                                {/* <!-- Call Nav Menu--> */}
                                <a class="mobile-nav" href="#mobile-nav"><i class="fa fa-bars"></i></a>
                                {/* <!-- End Call Nav Menu--> */}
                            </div>
                            {/* <!-- End Adds Header--> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End headerbox--> */}
            </header>
            {/* <!-- End Header--> */}

            {/* <!-- mainmenu--> */}
            <nav class="mainmenu">
                <div class="container">
                    {/* <!-- Menu--> */}
                    <ul class="sf-menu" id="menu">
                        <li class="current">
                            <a href="index.html">Home</a>
                            
                        </li>

                        <li class="">
                            <a href="#">About</a>
                            {/* <ul class="sub-current">
                                <li>
                                    <a href="teams.html">Teams List</a>
                                </li>
                                <li>
                                    <a href="single-team.html">Single Team</a>
                                </li>
                            </ul> */}
                        </li>

                        <li>
                            <a href="#">Events</a>
                            <div class="sf-mega">
                                <div class="row">
                                     <div class="col-md-3">
                                        <h5><i class="fa fa-trophy" aria-hidden="true"></i>Sporty Scouting Cup</h5>
                                        <ul>
                                            <li><a href="table-point.html">Point Table</a></li>
                                            <li><a href="fixtures.html">Fixtures</a></li>
                                            <li><a href="groups.html">Groups</a></li>
                                            <li><a href="news-left-sidebar.html">News</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-users" aria-hidden="true"></i> Teams List</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/1.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="teams.html">+</a></div>
                                      </div>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-futbol-o" aria-hidden="true"></i> Players List</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/2.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="players.html">+</a></div>
                                      </div>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-gamepad" aria-hidden="true"></i> Results Info</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/3.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="results.html">+</a></div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        

                        <li class="">
                            <a href="#">Players</a>
                            {/* <ul class="sub-current">
                                <li>
                                    <a href="players.html">Players List</a>
                                </li>
                                <li>
                                    <a href="single-player.html">Single Player</a>
                                </li>
                            </ul> */}
                        </li>

                        <li>
                            <a href="#">Gallery</a>
                            <div class="sf-mega">
                                <div class="row">
                                     <div class="col-md-3">
                                        <h5><i class="fa fa-trophy" aria-hidden="true"></i>Sporty Scouting Cup</h5>
                                        <ul>
                                            <li><a href="table-point.html">Photos</a></li>
                                            <li><a href="fixtures.html"> Video</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-camera" aria-hidden="true"></i> Photos</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/1.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="teams.html">View</a></div>
                                      </div>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-play-circle-o" aria-hidden="true"></i> Video</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/2.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="players.html">View</a></div>
                                      </div>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-gamepad" aria-hidden="true"></i> Live Events</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/3.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="results.html">View</a></div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                        {/* <li>
                            <a href="fixtures.html">Gallery</a>
                        </li> */}

                        {/* <li class="current">
                            <a href="results.html">Results</a>
                            <ul class="sub-current">
                                <li>
                                    <a href="results.html">Results List</a>
                                </li>
                                <li>
                                    <a href="single-result.html">Single Result</a>
                                </li>
                            </ul>
                        </li> */}

                        <li>
                            <a href="#">News</a>
                        </li>

                        {/* <li>
                            <a href="groups.html">Groups</a>
                        </li> */}

                        {/* <li>
                            <a href="#">Features</a>
                            <div class="sf-mega">
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Features</h5>
                                        <ul>
                                            <li><a href="page-full-width.html">Full Width</a></li>
                                            <li><a href="page-left-sidebar.html">Left Sidebar</a></li>
                                            <li><a href="page-right-sidebar.html">Right Sidebar</a></li>
                                            <li><a href="page-404.html">404 Page</a></li>
                                            <li><a href="page-faq.html">FAQ</a></li>
                                            <li><a href="sitemap.html">Sitemap</a></li>
                                            <li><a href="page-pricing.html">Pricing</a></li>
                                            <li><a href="page-register.html">Register Form</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <h5>Headers & Footers</h5>
                                        <ul>
                                            <li><a href="feature-header-footer-1.html">Header Version 1</a></li>
                                            <li><a href="feature-header-footer-2.html">Header Version 2</a></li>
                                            <li><a href="feature-header-footer-3.html">Header Version 3</a></li>
                                            <li><a href="index-5.html">Header Version 4</a></li>
                                            <li><a href="feature-header-footer-1.html#footer">Footer Version 1</a></li>
                                            <li><a href="feature-header-footer-2.html#footer">Footer Version 2</a></li>
                                            <li><a href="feature-header-footer-3.html#footer">Footer Version 3</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-md-3">
                                        <h5>Pages</h5>
                                        <ul>
                                            <li><a href="page-about.html">About Us</a></li>
                                            <li><a href="single-player.html">About Me</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="single-team.html">Club Info</a></li>
                                            <li><a href="single-result.html">Match Result</a></li>
                                            <li><a href="table-point.html">Positions</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-md-3">
                                        <h5>News</h5>
                                        <ul>
                                            <li>
                                                <a href="news-left-sidebar.html">News Lef Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="news-right-sidebar.html">News Right Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="news-no-sidebar.html">News No Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="single-news.html">Single News</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <i class="fa fa-trophy big-icon" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li> */}

                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                    {/* <!-- End Menu--> */}
                </div>
            </nav>
            {/* <!-- End mainmenu-->
{/*  */}
            {/* <!-- Mobile Nav--> */} 
            <div id="mobile-nav">
                {/* <!-- Menu--> */}
                <ul>
                    <li>
                        <a href="">Home</a>
                        
                    </li>

                    <li class="">
                            <a href="#">About</a>
                            {/* <ul class="sub-current">
                                <li>
                                    <a href="teams.html">Teams List</a>
                                </li>
                                <li>
                                    <a href="single-team.html">Single Team</a>
                                </li>
                            </ul> */}
                        </li>

                        <li>
                            <a href="#">Events</a>
                            <div class="sf-mega">
                                <div class="row">
                                     <div class="col-md-3">
                                        <h5><i class="fa fa-trophy" aria-hidden="true"></i>Sporty Scouting Cup</h5>
                                        <ul>
                                            <li><a href="table-point.html">Point Table</a></li>
                                            <li><a href="fixtures.html">Fixtures</a></li>
                                            <li><a href="groups.html">Groups</a></li>
                                            <li><a href="news-left-sidebar.html">News</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-users" aria-hidden="true"></i> Teams List</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/1.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="teams.html">+</a></div>
                                      </div>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-futbol-o" aria-hidden="true"></i> Players List</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/2.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="players.html">+</a></div>
                                      </div>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-gamepad" aria-hidden="true"></i> Results Info</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/3.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="results.html">+</a></div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                    <li>
                        <a href="players.html">Players</a>
                        {/* <ul>
                            <li>
                                <a href="players.html">Players List</a>
                            </li>
                            <li>
                                <a href="single-player.html">Single Player</a>
                            </li>
                        </ul> */}
                    </li>


                    <li>
                            <a href="#">Gallery</a>
                            <div class="sf-mega">
                                <div class="row">
                                     <div class="col-md-3">
                                        <h5><i class="fa fa-trophy" aria-hidden="true"></i>Sporty Scouting Cup</h5>
                                        <ul>
                                            <li><a href="table-point.html">Photos</a></li>
                                            <li><a href="fixtures.html"> Video</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-camera" aria-hidden="true"></i> Photos</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/1.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="teams.html">View</a></div>
                                      </div>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-play-circle-o" aria-hidden="true"></i> Video</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/2.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="players.html">View</a></div>
                                      </div>
                                    </div>

                                    <div class="col-md-3">
                                      <h5><i class="fa fa-gamepad" aria-hidden="true"></i> Live Events</h5>
                                      <div class="img-hover">
                                         <img src="img/blog/3.jpg" alt="" class="img-responsive"/>
                                         <div class="overlay"><a href="results.html">View</a></div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    {/* <li>
                        <a href="fixtures.html">Fixtures</a>
                    </li> */}

                    <li>
                        <a href="">News</a>
                        {/* <ul>
                            <li>
                                <a href="results.html">Results List</a>
                            </li>
                            <li>
                                <a href="single-result.html">Single Result</a>
                            </li>
                        </ul> */}
                    </li>

                    {/* <li>
                        <a href="table-point.html">Point Table</a>
                    </li> */}

                    {/* <li>
                        <a href="groups.html">Groups</a>
                    </li>

                    <li>
                        <a href="#">Features</a>
                        <ul>
                            <li>
                                <a href="#">Features</a>
                                <ul>
                                    <li><a href="page-full-width.html">Full Width</a></li>
                                    <li><a href="page-left-sidebar.html">Left Sidebar</a></li>
                                    <li><a href="page-right-sidebar.html">Right Sidebar</a></li>
                                    <li><a href="page-404.html">404 Page</a></li>
                                    <li><a href="page-faq.html">FAQ</a></li>
                                    <li><a href="sitemap.html">Sitemap</a></li>
                                    <li><a href="page-pricing.html">Pricing</a></li>
                                    <li><a href="page-register.html">Register Form</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">Headers & Footers</a>
                                <ul>
                                    <li><a href="feature-header-footer-1.html">Header Version 1</a></li>
                                    <li><a href="feature-header-footer-2.html">Header Version 2</a></li>
                                    <li><a href="feature-header-footer-3.html">Header Version 3</a></li>
                                    <li><a href="index-5.html">Header Version 4</a></li>
                                    <li><a href="feature-header-footer-1.html#footer">Footer Version 1</a></li>
                                    <li><a href="feature-header-footer-2.html#footer">Footer Version 2</a></li>
                                    <li><a href="feature-header-footer-3.html#footer">Footer Version 3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                                <ul>
                                    <li><a href="page-about.html">About Us</a></li>
                                    <li><a href="single-player.html">About Me</a></li>
                                    <li><a href="feature-header-footer-2.html#footer">Services</a></li>
                                    <li><a href="single-team.html">Club Info</a></li>
                                    <li><a href="single-result.html">Match Result</a></li>
                                    <li><a href="table-point.html">Positions</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">News</a>
                                <ul>
                                    <li>
                                        <a href="news-left-sidebar.html">News Lef Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="news-right-sidebar.html">News Right Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="news-no-sidebar.html">News No Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="single-news.html">Single News</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}

                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                {/* <!-- End Menu--> */}
            </div>
            {/* <!-- End Mobile Nav--> */}
        </>
    )
}

export default Navbar;
