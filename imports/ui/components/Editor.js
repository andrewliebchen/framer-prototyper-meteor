import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import React from 'react';

import 'brace/mode/javascript';
import 'brace/mode/coffee';
import '../../lib/tomorrow_night_eighties';

const Editor = props => (
  <AceEditor
    {...props}
    mode={props.mode === 'coffeescript' ? 'coffee' : 'javascript'}
    showInvisibles
    theme="tomorrow_night_eighties"
    tabSize={2}
    softTabs={false}
    highlightActiveLine={false}
    highlightGutterLine={false}
    editorProps={{
      $blockScrolling: true,
    }}
    style={{
      fontSize: '16px',
      lineHeight: '28px',
    }}
  />
);

Editor.propTypes = {
  theme: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
  mode: PropTypes.oneOf(['coffeescript', 'javascript']),
  readOnly: PropTypes.bool,
};

export default Editor;
