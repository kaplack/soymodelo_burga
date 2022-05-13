import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Categories from "../components/Categories/Categories";
import MyEvents from "../components/Eventos/MyEvents";

function Home() {
  return (
    <div>
      <Categories />
      <ItemListContainer />
      <MyEvents />
    </div>
  );
}

export default Home;
