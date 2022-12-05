import React, { useEffect, useState } from 'react';
import api from './api/axios';
import './app.css';
import Loading from './components/Loading';

function App() {
  const [data, setData] = useState(null);
  const [main, setMain] = useState(null);
  const [location, setLocation] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Read Data
      try {
        const res = await api.get(
          `/weather?q=seoul&appid=31196c801aab2690ac0eb7354ef3c350`
        );
        setData(res.data);
        setMain(data.main);
        setLocation({
          city: data.name,
          country: data.sys.country,
        });
        setWeatherInfo(data.weather[0]);
      } catch (err) {
        if (err.response) {
          // 응답코드 2xx가 아닌 경우
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchData();
  }, []);

  if (!!data) {
    console.log(main);
    console.log(location);
    console.log(weatherInfo);
  }

  return (
    <article id="weather_info">
      {data ? (
        <>
          <h1 className="city">
            {location.city} / {location.country}
          </h1>
          <section>
            <h2 className="weather_condition">{weatherInfo.main}</h2>
            <figure className="icon">
              <img
                src={`http://openweathermap.org/img/wn/${weatherInfo.icon}.png`}
                alt=""
              />
            </figure>
          </section>
          <section>
            <h2>현재 온도</h2>
            <div className="cont_temp">
              <strong className="temp">
                {parseInt(main.temp - 273.15)} &deg;
              </strong>
              <div>
                <span className="temp_max">
                  최대 : {parseInt(main.temp_max - 273.15)} &deg;
                </span>
                <span className="temp_min">
                  최저 : {parseInt(main.temp_min - 273.15)} &deg;
                </span>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </article>
  );
}

export default App;
