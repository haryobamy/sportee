import React from 'react'

const Footer = () => {
    return (
        <>
            {/* <!-- footer 2--> */}
            <footer id="footer" class="footer-2">
                {/* <!-- Footer Top--> */}
                <div class="top-footer">

                    {/* <!-- Logo Footer--> */}
                   <div class="col-lg-12">
                        <div class="logo-footer">
                            <h2>Sporty Scouting</h2>
                        </div>
                   </div>
                    {/* <!-- End Logo Footer--> */}

                    {/* <!-- Social Icons--> */}
                    <ul class="social">
                        <li>
                            <div>
                                <a href="#" class="facebook">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#" class="twitter-icon">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#" class="vimeo">
                                    <i class="fa fa-vimeo-square"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#" class="google-plus">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#" class="youtube">
                                    <i class="fa fa-youtube"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                    {/* <!-- End Social Icons--> */}
                </div>
                {/* <!-- End Footer Top--> */}

                {/* <!-- Links Footer--> */}
                <div class="links-footer">
                    <div class="container">
                        <div class="row">

                           {/* <!-- Column Links --> */}
                            <div class="col-lg-4 col-md-5 col-sm-5">
                                <div class="info-links">
                                   <h5>Useful Links</h5>
                                    <ul>
                                        <li><a href="#">Volunteers</a></li>
                                        <li><a href="#">Committees</a></li>
                                        <li><a href="#">Official Documents</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Column Links --> */}

                            {/* <!-- Column Links --> */}
                            {/* <div class="col-lg-4 col-md-7 col-sm-7">
                                <div class="info-links">
                                   <h5>Groups</h5>
                                    <ul class="columns">
                                        <li><a href="#">GROUP A</a></li>
                                        <li><a href="#">GROUP B</a></li>
                                        <li><a href="#">GROUP C</a></li>
                                        <li><a href="#">GROUP D</a></li>
                                        <li><a href="#">GROUP E</a></li>
                                        <li><a href="#">GROUP F</a></li>
                                        <li><a href="#">GROUP G</a></li>
                                        <li><a href="#">GROUP H</a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <!-- End Column Links --> */}

                            {/* <!-- Column Links --> */}
                            <div class="col-lg-4 col-md-5 col-sm-5">
                                <div class="info-links">
                                   <h5>Events Links</h5>
                                    <ul>
                                        <li><a href="#">Statistics</a></li>
                                        <li><a href="#">Teams</a></li>
                                        <li><a href="#">Qualifiers</a></li>
                                        <li><a href="#">Ticketing</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Column Links --> */}

                            {/* <!-- Column Links --> */}
                            <div class="col-lg-4 col-md-7 col-sm-7">
                                <div class="info-links">
                                   <h5>Sponsors</h5>
                                    <ul class="columns">
                                        <li><a href="#">NIZHNY NOVGOROD</a></li>
                                        <li><a href="#">SAINT PETERSBURG</a></li>
                                        <li><a href="#">EKATERINBURG</a></li>
                                        <li><a href="#">MOSCOW</a></li>
                                        <li><a href="#">KAZAN</a></li>
                                        <li><a href="#">KALININGRAD</a></li>
                                        <li><a href="#">VOLGOGRAD</a></li>
                                        <li><a href="#">ROSTOV-ON-DON</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Column Links --> */}

                        </div>
                    </div>
                </div>
                {/* <!-- End Links Footer--> */}


                {/* <!-- footer Down--> */}
                <div class="footer-down">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <p>&copy; {new Date().getFullYear()}, Designed by {"Orbithall IT Solutions"} || Sporty Scouting . All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer Down--> */}
            </footer>
            {/* <!-- End footer 2--> */}
        </>
    )
}

export default Footer
