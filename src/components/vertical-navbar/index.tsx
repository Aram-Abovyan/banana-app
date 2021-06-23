import { useState } from 'react';
import { MenuItem1 } from "../../assets/MenuItem1";
import { MenuItem2 } from "../../assets/MenuItem2";
import { MenuItem3 } from "../../assets/MenuItem3";

export default function VerticalNavbar() {
  const [selected, setSelected] = useState('1');

  return (
    <div className="vertical-navbar">
      <ul>
        <li><a onClick={() => {setSelected('1')}}><MenuItem1 selected={selected} /></a></li>
        <li><a onClick={() => {setSelected('2')}}><MenuItem2 selected={selected} /></a></li>
        <li><a onClick={() => {setSelected('3')}}><MenuItem3 selected={selected} /></a></li>
      </ul>
    </div>
  );
}