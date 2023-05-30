import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [colors, setColors] = useState(new Values("#f13528").all(10));
  const addColor = (color) => {
    try {
      console.log(color);
      const newColor = new Values(color).all(5);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer />
    </>
  );
}

export default App;
