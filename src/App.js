import { ChakraProvider } from "@chakra-ui/react";
import Editor from "./Editor";
import Footer from "./Footer";
import NabBar from './NavBar.jsx'

function App() {
  return (
    <ChakraProvider>
      <div className="App" style={{ background: "#eaecef" }}>
        <NabBar />
        <Editor />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
