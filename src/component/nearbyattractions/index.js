import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function Guest({ title, children }) {
  return (
    <Box shadow>
      <div className="nearby__block">
        <Heading>{title}</Heading>

        <div className="nearby__list">
          {children.map(({ id, ...rest }) => (
            <Fragment key={id}>
              <Item {...rest} />
            </Fragment>
          ))}
        </div>
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <div className="nearby">
      <a className="nearby__info" href={link}>
        {name}
      </a>
    </div>
  );
}