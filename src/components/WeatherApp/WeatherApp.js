import React, { useState } from "react";

import Form from "../Form/Form";

const WeatherApp = () => {
  const [queryString, setQueryString] = useState("");

  return (
    <div>
      <Form queryString={queryString} setQueryString={setQueryString} />
    </div>
  );
};

export default WeatherApp;
