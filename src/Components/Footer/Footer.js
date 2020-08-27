import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid } from "@material-ui/core";
import logo from '../../images/logo.png';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
                <div className="footer__col">
                    <h2>Get to Know Us</h2>
                    <ul>
                        <li><Link className="footer__link" to='/' >Careers</Link> </li>
                        <li><Link className="footer__link" to='/' >Blog</Link> </li>
                        <li><Link className="footer__link" to='/' >About IWantMore</Link> </li>
                        <li><Link className="footer__link" to='/' >Sustainability</Link> </li>
                        <li><Link className="footer__link" to='/' >Investor Relations</Link> </li>
                        <li><Link className="footer__link" to='/' >IWantMore Devices</Link> </li>
                        <li><Link className="footer__link" to='/' >IWantMore Tours</Link> </li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <div className="footer__col">
                    <h2>Make Money with Us</h2>
                    <ul>
                        <li><Link className="footer__link" to='/' >Sell products on IWantMore</Link> </li>
                        <li><Link className="footer__link" to='/' >Sell apps on IWantMore</Link> </li>
                        <li><Link className="footer__link" to='/' >Become an Affiliate</Link> </li>
                        <li><Link className="footer__link" to='/' >Advertise Your Products</Link> </li>
                        <li><Link className="footer__link" to='/' >Self-Publish with Us</Link> </li>
                        <li><Link className="footer__link" to='/' >Host an IWantMore Hub</Link> </li>
                        <li><Link className="footer__link" to='/' >See More Make Money with Us</Link> </li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <div className="footer__col">
                    <h2>IWantMore Payment Products</h2>
                    <ul>
                        <li><Link className="footer__link" to='/' >IWantMore Business Card</Link> </li>
                        <li><Link className="footer__link" to='/' >Shop with Points</Link> </li>
                        <li><Link className="footer__link" to='/' >Reload Your Balance</Link> </li>
                        <li><Link className="footer__link" to='/' >IWantMore Currency Converter</Link> </li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <div className="footer__col">
                    <h2>Let Us Help You</h2>
                    <ul>
                        <li><Link className="footer__link" to='/' >IWantMore and COVID-19</Link> </li>
                        <li><Link className="footer__link" to='/' >Your Account</Link> </li>
                        <li><Link className="footer__link" to='/' >Your Orders</Link> </li>
                        <li><Link className="footer__link" to='/' >Shipping Rates & Policies</Link> </li>
                        <li><Link className="footer__link" to='/' >Returns & Replacements</Link> </li>
                        <li><Link className="footer__link" to='/' >Manage Your Content and Devices</Link> </li>
                        <li><Link className="footer__link" to='/' >IWantMore Assistant</Link> </li>
                        <li><Link className="footer__link" to='/' >Help</Link> </li>
                    </ul>
                </div>
            </Grid>
          </Grid>
        </Container>
        <div className="footer__logo">
            <img src={logo} alt="Logo"/>
        </div>
        <div className="footer__copyright">
            <ul>
                <li><Link to='/'>Conditions of Use</Link></li>
                <li><Link to='/'>Privacy</Link></li>
                <li><Link to='/'>NoticeInterest-Based Ads</Link></li>
                <li>© 2019-2020, IWantMore.com, Inc. or its affiliates</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
