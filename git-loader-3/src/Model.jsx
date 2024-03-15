import React from "react";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const result = await "info.txt";
// extractedData
const text = await result.text();
console.log(text);
const splitter = new RecursiveCharacterTextSplitter();

const output = await splitter.createDocuments([text]);

function Model() {
  return <div>Model</div>;
}

export default Model;
