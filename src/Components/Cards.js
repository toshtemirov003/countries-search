import "./flags.css";

const Cards = ({img,name,population,region,capital}) => {
  return (
    <li className="list__item">
      <img
        className="list__img"
        src={img}
        alt="Germany flag"
        width="267"
        height="160"
      />
      <div className="list__item-content content">
        <h3 className="content__title">{name}</h3>
        <p className="content__text">
          <strong className="content__text-bold">Population: </strong>
          {population}
        </p>
        <p className="content__text">
          <strong className="content__text-bold">Region: </strong>
          {region}
        </p>
        <p className="content__text">
          <strong className="content__text-bold">Capital: </strong>
          {capital}
          
        </p>
      </div>
    </li>
  );
};
export default Cards;
