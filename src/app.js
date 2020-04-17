import React from 'react';
import { Cards, Charts, CountryPicker } from './components';

import { fetchData } from './api';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCounrtyChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });

    console.log(fetchedData);
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src='https://i.ibb.co/7QpKsCX/image.png'
          alt='COVID-19'
        />
        <Cards data={data} />
        <CountryPicker handleCounrtyChange={this.handleCounrtyChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
