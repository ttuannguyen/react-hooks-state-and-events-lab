import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setIsOn] = useState(false); 
  
  // replace 'false' with a state variable (above) that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  
  //event handler => update state when button is clicked (see onClick below)
  function handleDarkModeButton() {
    setIsOn((isDarkMode) => !isDarkMode);
  } 


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeButton}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
