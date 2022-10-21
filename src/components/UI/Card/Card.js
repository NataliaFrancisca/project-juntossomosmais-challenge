import { CardStyle } from "./CardStyle";

const Card = ({dataCard}) => {
    const {name, location, picture} = dataCard;
    const {city, state, postcode} = location;

    const getStreet = () => {
        const streetArr = location.street.trim().split(" ");

        const getOnlyTheNumber = streetArr[0];
        const getOnlyTheName = streetArr.slice(1, location.street.length).join(" ");

        return `${getOnlyTheName}, ${getOnlyTheNumber}`
    }

    return(
        <CardStyle>
            <img src={picture.large} />

            <h1>{name.first} {name.last}</h1>

            <span className="street">{getStreet()}</span>
            <span className="address-details">{city} <br /> {state} - CEP: {postcode}</span>
        </CardStyle>
    )
}

export default Card;