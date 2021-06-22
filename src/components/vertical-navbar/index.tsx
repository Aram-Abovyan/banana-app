import { MenuItem1 } from "../../assets/MenuItem1";
import { MenuItem2 } from "../../assets/MenuItem2";
import { MenuItem3 } from "../../assets/MenuItem3";

export default function VerticalNavbar() {
  return (
    <div className="vertical-navbar">
      <ul>
        <li><MenuItem1 /></li>
        <li><MenuItem2 /></li>
        <li><MenuItem3 /></li>
      </ul>
    </div>
  );
}