// import { useState } from "react";
import { FilterableProductTable } from "./Components/Start";
import "./App.css";
import Gallery from "./Components/StateComponent";
import AddingToAnArray from "./Components/AddingToAnArray";
import RemoveFromAnArray from "./Components/RemoveFromAnArray";
import TransforingAnArray from "./Components/TransformingAnArray";
import InsertingIntoArray from "./Components/InsertingIntoArray";
import UpdatedObjImmer from "./Components/UpdatedObjImmer";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />;
      <Gallery />
      <AddingToAnArray />
      <RemoveFromAnArray />
      <TransforingAnArray />
      <InsertingIntoArray />
      <UpdatedObjImmer />
    </div>
  );
}

export default App;
