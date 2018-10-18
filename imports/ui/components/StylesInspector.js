import Button from './Button.jsx';
import CodeElement from './CodeElement.jsx';
import PropTypes from 'prop-types';
import React from 'react';

const StylesInspector = props => (
  <div className="ModalSection">
    <h3>Styles</h3>
    <p>
      Reprehenderit adipisicing dolor do non exercitation adipisicing laboris
      amet adipisicing dolore.
    </p>
    {props.styles.map(style => (
      <CodeElement
        key={style._id}
        collection={style}
        defaultNameValue={style.name}
        handleNameUpdate={event =>
          Meteor.call('updateStyle', style._id, {
            name: event.target.value,
          })
        }
        code={style.code}
        handleCodeUpdate={event =>
          Meteor.call('updateStyle', style._id, {
            code: event,
          })
        }
        handleDelete={() => {
          if (window.confirm('Are you sure you want to delete this style?')) {
            Meteor.call('deleteStyle', style._id);
          }
        }}
        handleRefresh={() => console.log('refresh?')}
        disabled={!style.name}
      />
    ))}
    <Button
      block
      label="Add new style"
      onClick={() => Meteor.call('newStyle', props.prototype._id)}
    />
  </div>
);

StylesInspector.propTypes = {
  styles: PropTypes.array,
  prototype: PropTypes.object,
};

export default StylesInspector;
