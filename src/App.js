import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filterdProducts: []
    };
  }
  componentWillMount() {
    fetch("http://locathost:8000/products")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filerdProducts: data
        })
      );
  }
  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Products
              products={this.state.filterdProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
export default App;
