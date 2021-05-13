import React from "react";

function Movie({ title }) {
  return <h1>This is {title} !</h1>;
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Movie title = "Minari" /> 
    <Movie title = "Avengers" /> 
    <Movie title = "Iron man" /> 
    <Movie title = "Spider man" /> 
  </div>);
}

export default App;
 