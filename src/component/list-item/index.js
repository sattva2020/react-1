import "./index.css";

export default function Page({ children, imageSrc, title }) {
  return (
    <il className="item-list">
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}
        <div className="list-item__content">{children}</div>
      </div>
    </il>
  );
}
