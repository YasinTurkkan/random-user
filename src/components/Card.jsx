import '../components/Card.css';
import emailImg from '../assets/email.svg'
import locationImg from '../assets/location.svg'
import phoneImg from '../assets/phone.svg'


const Card = ({item}) => {

    return (
        <div className="card">
   
            <img className="image1" src={item.picture.medium} alt="person" />
            <p className="name">{item.name.title}{" "}{item.name.first}{" "}{item.name.last}</p>

            <img className="image2" src={emailImg} alt="email logo" />
            <p className="email">{item.email}</p>

            <img className="image3" src={phoneImg} alt="phone logo" />
            <p className="phone">{item.phone}</p>

            <img className="image4" src={locationImg} alt="location logo" />
            <p className="location">{item.location.city}{" - "}{item.location.country}</p>

            <div className="age">{"Age:"} {item.dob.age}</div>
        
            <div className="register">{"Register Date: "}{item.registered.date.substr(0,10)}</div>
           
        </div>
    );
};

export default Card;

