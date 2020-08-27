import React from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import './Cart.css';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

class Cart extends React.Component {
  render() {

    return (
      <div className="cart">
        <h2>My Shopping Cart</h2>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs="12" sm="8">
              <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            <div className="cart-item">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/61dKulO1glL._UL1500_.jpg" alt="product" />
                                <div className="product-detail">
                                    <h3>{row.name}</h3>
                                </div>
                            </div>
                          
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="continue-shopping">
                <a href="/">Continue Shopping</a>
              </div>
            </Grid>

            <Grid item xs="12" sm="4">
              <div className="cart-detail">
                <h2>Order Summary</h2>
                <div className="order-total">
                  <p>
                    Items x 2 <span>$70</span>
                  </p>
                  <p>
                    Total Cost <span>$70</span>
                  </p>
                </div>
                <a href="#">Checkout</a>
                <div className="coupon">
                  <form
                    method="post"
                    action="."
                    autoComplete="false"
                    noValidate
                  >
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      name="coupon"
                    />
                  </form>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Cart;
