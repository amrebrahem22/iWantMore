import React from "react";
import Paper from "@material-ui/core/Paper";
import Banner from "../../Components/Banner/Banner";
import Container from "@material-ui/core/Container";
import Product from "../../Components/Product/Product";
import DiscoveComponent from "../../Components/Discover/Discover";
import ProductSlider from "../../Components/ProductsSlider/ProductSlider";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const pr = {
  title: "Fisher Price Laugh Stages Amazon Exclusive",
  price: 255,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/415LNOY8j-L._AC_SY200_.jpg",
  rating: 5,
};

function Home() {
  return (
    <div>
      <Banner />
      <div className="product_container">
        <Product {...pr} />
        <Product {...pr} />
        <Product {...pr} />
      </div>

      <Container maxWidth="lg">
        <Paper elevation={3} className="paper_container">
          <h2 className="featured">Featured Products</h2>
          <div className="product_container">
            <Product {...pr} />
            <Product {...pr} />
            <Product {...pr} />
            <Product {...pr} />
          </div>
        </Paper>
      </Container>

      <Container maxWidth="lg">
        <Paper elevation={3}>
          <DiscoveComponent />
        </Paper>
      </Container>

      <Container maxWidth="lg">
        <Paper elevation={3}>
          <ProductSlider
            title="Latest Products"
            slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          />
        </Paper>
      </Container>

      <Container maxWidth="lg">
        <Paper elevation={3}>
          <ProductSlider
            title="Best Seller"
            slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          />
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
