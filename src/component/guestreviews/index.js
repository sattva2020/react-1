import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";


export default function Reviews({ title, children }) {
  return (
    <div className="room__block">
    <Heading border>{title}</Heading>

      <div className="room__list">
        {children.map(({ id, ...rest }) => (
          <Fragment key={{id}}>
            <Item {...rest} />
          </Fragment>
        ))} 
      </div>
    </div>
    );
  }

export function Item({ guestName, rating, review }) {
  return (
    <Box className="room">
      <span className="room__title">{guestName}</span>
      <span className="room__info">Рейтинг: {rating}</span>
      <span className="room_info">{review}</span>
    </Box>
  );
}