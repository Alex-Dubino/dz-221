import { useState } from "react";
import "./Cards.scss";

export default function Cards(props) {
  const [item, SetItem] = useState(0);

  function AddItem() {
    SetItem(item + 1);
  }
  function DellItem() {
    if (item == 0) {
      SetItem(item);
    } else {
      SetItem(item - 1);
    }
  }
  return (
    <div className="card__item">
      <div className="card__item-left">
        <div className="card__item-left-img">
          <img src={props.cards.img} alt="#" />
        </div>
        <div className="description__item">
          <div className="description__item-content">
            <h3>{props.cards.title}</h3>
            <span>{props.cards.massa}</span>
          </div>
          <div className="description__item-price">
            <span>{props.cards.price}</span>
          </div>
        </div>
      </div>
      <div className="card__item-right">
        <button className="dell" onClick={DellItem}>
          -
        </button>
        <span>{item}</span>
        <button className="add" onClick={AddItem}>
          +
        </button>
      </div>
    </div>
  );
}
