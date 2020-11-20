import React from "react";
import Header from "./components/Header.js"
import FormContainer from "./components/FormContainer"

//A basic App function returning our web page with a Header and the FormContainer
function App() {
  return (
    <div>
      <Header />
      <div>
        <FormContainer />
      </div>
    </div>

  )

}

export default App;