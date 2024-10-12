import "./Country.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Country = ({ country }) => {
  const { name, area, flags, ccn3 } = country;
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/country/${ccn3}`);
  };

  return (
    <div className=" country-box">
      
        <div className="country">
        <img src={flags.png} alt="" />
        <h2>{name.common}</h2>
        <p>Area: {area}</p>
        </div>
 

      <button className="details-btn" onClick={handleDetails}>
        Details
      </button>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
