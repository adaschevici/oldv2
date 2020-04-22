import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FontFace from "../../fonts";

const AlertComponent = ({ message = "this is an alert" }) => (
  <span>{message}</span>
);

AlertComponent.propTypes = {
  message: PropTypes.string
};

const StyledAlertComponent = styled.div`
  color: red;
  font-family: "Artifika";
`;

export default props => (
  <StyledAlertComponent>
    <FontFace />
    <AlertComponent {...props} />
  </StyledAlertComponent>
);
