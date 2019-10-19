import React from "react";
import styled from "styled-components";

const WeatherTemplate = ({
  className,
  component,
  title,
  temp,
  temp_min,
  temp_max
}) => {
  const formatTemp = val => `${Math.round(val)}°c`;
  return (
    <Wrapper className={className} component={component}>
      <Title component={component}>{title}</Title>
      {component === "current" && <Temp>Lowest: {formatTemp(temp_min)}</Temp>}
      <AverageTemp component={component}>{formatTemp(temp)}</AverageTemp>
      {component === "current" && <Temp>Highest: {formatTemp(temp_max)}</Temp>}
    </Wrapper>
  );
};

export default WeatherTemplate;

const Wrapper = styled.div`
  display: inline-block;
  padding: 20px;
`;
const Title = styled.p`
  color: ${({ component }) => (component === "current" ? "blue" : "navy")};
  font-weight: 500;
  margin: 0;
  padding-top: 20px;
  font-size: ${({ component }) => (component === "current" ? "55px" : "35px")};
  text-transform: ${({ component }) => component === "current" && "uppercase"};
`;

const Temp = styled.p`
  display: inline-block;
  padding: 0px 20px;
  margin-bottom
`;

const AverageTemp = styled.p`
  font-size: 40px;
  font-weight: ${({ component }) => component === "current" && "600"};
  display: inline-block;
`;
