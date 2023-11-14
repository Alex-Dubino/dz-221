import "../style/App.scss";
import Cards from "./Cards/Cards";
import burger from "../assets/burger.svg"
import potatoes from "../assets/potatoes.svg"
import hotDog from "../assets/hot-dog.svg"
function App() {
  const arr = [
    {
      title: "Супер сырный",
      massa: "512г",
      price: "550₽",
      img: burger,
    },
    {
      title: "Картошка фри",
      massa: "180г",
      price: "245₽",
      img: potatoes,
    },
    {
      title: "Жгучий хот-дог",
      massa: "245г",
      price: "239₽",
      img: hotDog,
    },
  ];

  return (
    <>
      <div className="cards">
        <Cards cards={arr[0]} />
        <Cards cards={arr[1]} />
        <Cards cards={arr[2]} />
      </div>
    </>
  );
}

export default App;
