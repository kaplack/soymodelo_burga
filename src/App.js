import "./scss/style.scss";
import MyRoutes from "./routes/MyRoutes";
import GlobalStateContext from "./context/GlobalStateContext";

function App() {
  return (
    <div className="App">
      {/* <GlobalStateContext> */}
      <MyRoutes />
      {/* </GlobalStateContext> */}
    </div>
  );
}

export default App;
