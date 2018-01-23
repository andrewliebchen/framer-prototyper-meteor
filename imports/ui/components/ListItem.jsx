import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import styled from "styled-components";

const Item = styled(Flex)`
  border: 1px solid;
  border-color: ${props =>
    props.isCurrent ? "var(--color-accent)" : "var(--color-gray-3)"};
  padding: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  user-select: none;
  color: var(--color-gray-1);
  box-shadow: ${props => props.isCurrent && "var(--outline-focus)"};

  &:hover {
    border-color: var(--color-accent);
  }
`;

const ListItem = props => (
  <Item justify="space-between" onClick={props.onClick}>
    <Box>
      {props.primary && <h3>{props.primary}</h3>}
      {props.secondary && <div>{props.secondary}</div>}
    </Box>
    {props.actions && <Box>{props.actions}</Box>}
  </Item>
);

ListItem.propTypes = {
  isCurrent: PropTypes.bool,
  primary: PropTypes.string,
  secondary: PropTypes.node,
  actions: PropTypes.node,
  onClick: PropTypes.func,
  badge: PropTypes.string
};

export default ListItem;
