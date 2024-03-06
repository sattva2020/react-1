import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import "./index.css";

export default function Property({
  house_rules,
  cancel_policy,
  local_transport,
  host_lang,
  special_offers,
  instructions,
}) {
  return (
    <Box shadow>
      <ul className="additional__info">
        <Heading border>Додаткові властивості:</Heading>

        <ListItem title="Правила дому">
          <div className="additional__box">
            <span>{house_rules}</span>
          </div>
        </ListItem>

        <ListItem title="Політика скасування"> 
          <div className="additional__box">
            <span>{cancel_policy}</span>
          </div>
        </ListItem>

        <ListItem title="Місцевий транспорт">
          <div className="additional__box">
            <span>{local_transport}</span>
          </div>
        </ListItem>

        <ListItem title="Мови хоста">
          <div className="additional__box">
            <span>{host_lang}</span>
          </div>
        </ListItem>

        <ListItem title="Спеціальні пропозиції">
          <div className="additional__box">
            <span>{special_offers}</span>
          </div>
        </ListItem>

        <ListItem title="Інструкції щодо реєстрації">
          <div className="additional__box">
            <span>{instructions}</span>
          </div>
        </ListItem>
      </ul>
    </Box>
  );
}