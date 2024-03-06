import Heading from "../heading";
import Photo from "../photo";
import "./index.css";


export default function ContactInfo({ 
  name, 
  image,
  response_rate,
  response_time,
  info,
  phone,
 }) {
  return (
    <div className="contact">
      <div className="contact__top">
        <img className="contact__photo" src={image} alt="Host" />

        <div className="contact__right">
          <Heading>Господар - {name}</Heading>
          <p className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{response_time}</span>
            <span className="contact__sub-value">
              {response_rate} відсотків швидкості відгуку
            </span>
          </p>
        </div>
      </div>

      <p className="contact__text">{info}</p>
    </div>
  );
  }

