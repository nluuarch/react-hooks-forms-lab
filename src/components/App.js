import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleItemSubmit(newItem){
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleItemSubmit}/>
    </div>
  );
}

export default App;










// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import Header from "./Header";
// import itemData from "../data/items";

// function App() {
//   const [items, setItems] = useState(itemData);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function handleDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   function handleItemFormSubmit(newItem){
//     setItems([...items, newItem]);
//   }

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
//       <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
//     </div>
//   );
// }

// export default App;


