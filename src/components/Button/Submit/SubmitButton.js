import React from "react";

import Button from "../Button/Button";

const SubmitButton = ({ setQueryString }) => {
  const handleOnSubmit = async event => {
    event.preventDefault();
    setQueryString("");
  };

  return (
    <Button type="submit" onClick={handleOnSubmit}>
      SUBMIT
    </Button>
  );
};

export default SubmitButton;
