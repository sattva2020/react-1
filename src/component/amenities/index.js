import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import "./index.css";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breackfast  from "./breackfast.svg";
import wifi from "./wifi.svg";
import car from "./car.svg";
import pet from "./pet.svg";
import airpot from "./airpot.svg";
import ser from "./ser.svg";
import meetroom from "./meetroom.svg";
import child from "./child.svg";



export default function Amenities({ 
  title,
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
 }) {
  return (
    <Box shadow className="amenities">
      <Heading border>{title}</Heading>
      <ul className="amenities__list">
        <ListItem imageSrc={pool}>
          <span >{hasPool}</span>
          <span >Басейн</span>
        </ListItem>
        
        <ListItem imageSrc={gym}>
          <span >{hasGym}</span>
          <span >Спортивний зал</span>
        </ListItem>

        <ListItem imageSrc={breackfast}>
          <span >{hasFreeBreakfast}</span>
          <span >Безкоштовний сніданок</span>
        </ListItem>

        <ListItem imageSrc={wifi}>
          <span >{hasFreeWiFi}</span>
          <span >Безкоштовний Wi-Fi</span>
        </ListItem>

        <ListItem imageSrc={car}>
          <span >{hasFreeWiFi}</span>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>

        <ListItem imageSrc={car}>
          <span>{hasParking}</span>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>

        <ListItem imageSrc={pet}>
          <span>{hasPetsAllowed}</span>
          <span>Дозволено розмішення з тваринами</span>
        </ListItem>

        <ListItem imageSrc={airpot}>
          <span>{hasAirportShuttle}</span>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>

        <ListItem imageSrc={ser}>
          <span>{hasConciergeService}</span>
          <span>Консьєрж-сервіс</span>
        </ListItem>

        <ListItem imageSrc={meetroom}>
          <span>{hasRoomService}</span>
          <span>Обслуговування номерів</span>
        </ListItem>

        <ListItem imageSrc={child}>
          <span>{hasChildFriendly}</span>
          <span>Підходить для дітей</span>
        </ListItem>
      </ul>
    </Box>
  );
}
