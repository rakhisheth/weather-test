import React from "react";
import styled from "styled-components";

import SubmitButton from "../Button/Submit";
import Input from "../Input";

const Form = ({
  queryString,
  setQueryString,
  setCurrentWeatherData,
  setError
}) => {
  return (
    <FormWrapper>
      <InputField
        type="text"
        onChange={event => setQueryString(event.target.value)}
        placeholder="Location"
        value={queryString}
      />
      <SubmitButton
        queryString={queryString}
        setQueryString={setQueryString}
        setCurrentWeatherData={setCurrentWeatherData}
        setError={setError}
      />
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.form`
  background-color: navy;
  padding: 50px;
`;

const InputField = styled(Input)`
  font-size: 23px;
  font-weight: 50;
  transition: width 0.5s ease-out;
  height: 50px;
  width: 250px;
  border: none;
  border-bottom: 5px solid #fff;
  background-color: transparent;
  color: #fff;
  ::placeholder {
    color: #fff;
  }

  :focus {
    width: 35%;
    outline: none;
  }
`;
