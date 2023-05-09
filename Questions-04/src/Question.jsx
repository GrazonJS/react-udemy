import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Question(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <section key={props.id}>
        <h2>{props.title}</h2>
        <button onClick={() => setShow(!show)}>
          {show ? <IoIosAddCircle /> : <AiOutlineMinusCircle />}
        </button>
        <p>{show ? `` : props.info}</p>
      </section>
    </div>
  );
}

export default Question;
