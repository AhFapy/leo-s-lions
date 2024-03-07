import React, { useState } from 'react';
import "./card-component.css";
import CardButton from './CardButton';

function Card(props) {
  return (
    <div className={`card ${props.style} ${props.selected}`} onClick={() => props.onClick(props.id)}>
      <div className='card-header'>
        <span className='card-header'>{props.name}</span>
      </div>
      <div className='card-advantages'>
        <ul className='advantages-list'>
          <li className='advantage'> Access To My Private Community</li>
          <li className='advantage'> Access To Exclusive Videos and Courses</li>
          <li className='advantage'> Weekly Calls</li>
          <li className='advantage'> Become an Unimaginable Version of You</li>
        </ul>
        {props.selected === "selected" ? <CardButton text="I'M IN" route="localhost:8000"/> : ""}
      </div>
    </div>
  );
}

function CardComponent() {
  const [selected, setSelected] = useState(null);

  const handleSelection = function (id) {
    setSelected(id);
  };

  return (
    <>
      <div className='card-wrapper'>
        <Card name="BRONZE" id="bronze" style="bronze" onClick={handleSelection} selected={selected === "bronze" ? "selected" : ""} />
        <Card name="SILVER" id="silver" style="silver" onClick={handleSelection} selected={selected === "silver" ? "selected" : ""} />
        <Card name="GOLD" id="gold" style="gold" onClick={handleSelection} selected={selected === "gold" ? "selected" : ""} />
      </div>
    </>
  );
}

export default CardComponent;
