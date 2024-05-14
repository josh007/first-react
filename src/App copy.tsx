//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import { BsBarChartLine } from "react-icons/bs";
import Like from "./components/Like";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import { ExpandableText } from "./components/ExpandableText";

function App() {
  // let cities = ["New York", "San Francisco", "Tokyo", "Addis", "London"];

  // const handleSelectItem = (item: string) => {
  //   console.log("selected", item);
  // };

  const [alertVisible, setAlertVisible] = useState(false);
  const [cartItems, setCartItems] = useState(["Prod1", "Prod2", "Prod3"]);

  const handleButtonClick = (name: string) => {
    console.log("button clicked", name);
    setAlertVisible(true);
  };

  const handlerOnClear = () => {
    console.log("clear...");
    setCartItems([...cartItems, "added"]);
    //console.log("b4", cartItems);
    //setCartItems(cartItems.filter((item) => item !== "removed"));
    console.log(
      "items",
      cartItems.filter((item) => item !== "removed")
    );
    // setCartItems(
    //   cartItems.map((item) => (item === "added" ? "modified" : item))
    // );
    //setCartItems([]);
  };

  return (
    // <div>
    //   <ListGroup
    //     items={cities}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            console.log("close clicked");
            setAlertVisible(false);
          }}
        >
          {" "}
          My Alert
        </Alert>
      )}
      <Button color="secondary" onClick={handleButtonClick}>
        My Button
      </Button>
      <br></br>
      <BsBarChartLine color="red" size="40" />
      <Like
        full={true}
        onClick={() => {
          console.log("----------------clicked");
        }}
      />
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handlerOnClear} />

      <ExpandableText maxChars={50}>
        This is the text in the Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Vitae adipisci voluptatem delectus saepe neque odio in
        cum, nam nobis omnis ea! Quibusdam aliquam unde omnis odit distinctio
        architecto eaque explicabo.
      </ExpandableText>
    </div>
  );
}

export default App;
