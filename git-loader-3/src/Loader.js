import { GithubRepoLoader } from "langchain/document_loaders/web/github";
export async function Loader({ inputLink }) {
  const loader = new GithubRepoLoader(
    "https://github.com/GrazonJS/Learning-Javascript",
    {
      branch: "main",
      recursive: true,
    }
  );

  try {
    console.log(inputLink);
    const documents = await loader.load();
    filterData(documents);
  } catch (error) {
    console.error(error);
  }
}

export const filterData = (documents) => {
  const extractedData = documents.map((doc) => {
    return {
      source: doc.metadata.source,
      pageContent: doc.pageContent,
    };
  });
  console.log(extractedData);
  return extractedData;
};
