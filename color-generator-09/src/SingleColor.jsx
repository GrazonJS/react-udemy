import React from "react";
import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  console.log(color);
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Copied to clipboard");
      } catch (error) {
        toast.error("Unable to copy to ClipBoard");
      }
    } else {
      toast.error("Clipboard not available");
    }
  };

  return (
    <article style={{ background: `#${hex}` }} onClick={saveToClipboard}>
      #{hex} <br />
      {weight}%
    </article>
  );
}

export default SingleColor;
