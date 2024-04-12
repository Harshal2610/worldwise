import { useCities } from "../contextes/CitiesContext.jsx";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.node,
  isLoading: PropTypes.node,
};
export default CityList;
