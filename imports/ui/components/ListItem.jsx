import {Flex, Box} from 'reflexbox';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/ListItem.css';

const ListItem = props => (
  <Flex
    className={classnames({
      ListItem: true,
      Current: props.isCurrent,
    })}
    justify="space-between"
    onClick={props.onClick}>
    <Box className="ListItemContent">
      {props.primary && <h3>{props.primary}</h3>}
      {props.secondary && <div>{props.secondary}</div>}
    </Box>
    {props.actions && <Box className="ListItemActions">{props.actions}</Box>}
  </Flex>
);

ListItem.propTypes = {
  isCurrent: PropTypes.bool,
  primary: PropTypes.string,
  secondary: PropTypes.node,
  actions: PropTypes.node,
  onClick: PropTypes.func,
  badge: PropTypes.string,
};

export default ListItem;
