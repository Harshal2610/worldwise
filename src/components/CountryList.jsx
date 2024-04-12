import { useCities } from "../contextes/CitiesContext.jsx";
import CountryItem from "./CountryItem.jsx";
import styles from "./CountryList.module.css";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message />;

  // const countries = cities.reduce((arr, city) => {
  //   if (!arr.map((el) => el.country).includes(city.country))
  //     return [...arr, { country: city.country, emoji: city.emoji }];
  //   else return arr;
  // }, []);
  const countries = [];
  return (
    <ul className={styles.countryList}>
      {countries.map((countries) => (
        <CountryItem countries={countries} key={countries.id} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.node,
  isLoading: PropTypes.node,
};
export default CountryList;
