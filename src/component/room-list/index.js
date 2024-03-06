import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";


export default function RoomList({ list }) {
  return (
    <div className="room__block">
    <Heading border>Типи номерів</Heading>

      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={{id}}>
            <Item {...rest} />
          </Fragment>
        ))} 
      </div>
    </div>
    );
  }

export function Item({ type, pricePerNight: price, currency, capacity}) {
  return (
    <Box className="room">
      <span className="room__title">{type}</span>
      <span className="room__info">Кількість гостей: {capacity}</span>
      <span className="room__price">
        {currency}
        {price}
      </span>
    </Box>
  );
}