import "./scss/style.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
