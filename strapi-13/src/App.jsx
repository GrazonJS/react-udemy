import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import { useGlobalContext } from "./components/context";

function App() {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </>
  );
}

export default App;
