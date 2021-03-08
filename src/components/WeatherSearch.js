import React, { useContext, useRef, useEffect }from 'react';

import Context from '../Context';

const WeatherSearch = () => {

  const inputRef = useRef(null);
  const { api_call } = useContext(Context)

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="weather-search">
    <form onSubmit={api_call}className="weather-search__form">
      <input
        name="location"
        autoComplete="off"
        className="weather-search__input"
        type="text"
        ref={inputRef}
      />
      <div className="weather-search__submit">
      <button className="weather-search__button">&rarr;</button>
    </div>
  </form>
</div>
  );
}

export default WeatherSearch;