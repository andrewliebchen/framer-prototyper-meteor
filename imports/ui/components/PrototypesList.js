import {deletePrototype} from '../../lib/utils';
import {Flex, Box} from 'reflexbox';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {Trash2, Settings} from 'react-feather';
import Button from './Button';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import timeago from 'timeago.js';

import '../styles/PrototypesList.css';

const timeagoInstance = timeago();

const PrototypesList = props => (
  <div>
    <div className="PrototypeListHeader">
      <Button
        onClick={() =>
          Meteor.call('newPrototype', {
            createdAt: Date.now(),
            owner: Meteor.userId(),
          })
        }
        label="New Prototype"
        block
      />
    </div>
    {props.prototypes.map(prototype => {
      const isCurrent =
        props.prototype && prototype._id === props.prototype._id;
      return (
        <Link to={`/${prototype._id}`} key={prototype._id}>
          <Flex
            className={classnames({
              PrototypeItem: true,
              ListItem: true,
              Current: isCurrent,
            })}
            justify="space-between">
            <Box>
              <h3>{prototype.name || 'Untitled'}</h3>
              <div>
                Created <b>{timeagoInstance.format(prototype.createdAt)}</b>
              </div>
              <div>
                Updated <b>{timeagoInstance.format(prototype.updatedAt)}</b>
              </div>
            </Box>
            <Box className="PrototypeItemActions">
              {isCurrent || (
                <Trash2
                  className="ActionIcon Delete"
                  onClick={event => {
                    event.preventDefault();
                    deletePrototype(prototype._id);
                  }}
                />
              )}
              <Settings className="ActionIcon" onClick={props.showSettings} />
            </Box>
          </Flex>
        </Link>
      );
    })}
  </div>
);

PrototypesList.propTypes = {
  prototypes: PropTypes.array,
  prototype: PropTypes.object,
  showSettings: PropTypes.func,
};

export default PrototypesList;
