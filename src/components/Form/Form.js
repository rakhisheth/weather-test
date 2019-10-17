import React from "react";

import SubmitButton from "../Button/Submit";
import Input from "../Input";

const Form = ({ queryString, setQueryString }) => {
  return (
    <form>
      <Input
        type="text"
        onChange={event => setQueryString(event.target.value)}
        placeholder="Location"
        value={queryString}
      />
      <SubmitButton queryString={queryString} setQueryString={setQueryString} />
    </form>
  );
};

export default Form;
