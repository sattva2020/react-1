import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import "./index.css";

import guest from "./guest.svg";
import badroom from "./badroom.svg";
import bathroom from "./bathroom.svg";
import bad from "./bad.svg";


export default function Property({ title, guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="property">
      <Heading border>{title}</Heading>
      <ul className="property__list">
        <ListItem imageSrc={guest}>
          <span >{guests}</span>
          <span>гості</span>
        </ListItem>
        <ListItem imageSrc={badroom}>
          <span>{bedrooms}</span>
          <span>спальня</span>
        </ListItem>
        <ListItem imageSrc={bad}>
          <span>{beds}</span>
          <span>ліжко</span>
        </ListItem>
        <ListItem imageSrc={bathroom}>
          <span>{baths}</span>
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
