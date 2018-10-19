import _ from 'lodash';
import {Flex, Box} from 'reflexbox';
import {toast} from 'react-toastify';
import EditControls from './EditControls';
import FormInput from './FormInput';
import FramerEditor from './FramerEditor';
import Modal from './Modal';
import NotFoundPage from '../pages/NotFoundPage';
import PageComponents from './PageComponents';
import Preview from './Preview';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import React, {Component} from 'react';

import '../styles/Prototype.css';

class Prototype extends Component {
  constructor(props) {
    super(props);

    const isOwner = Meteor.userId() === this.props.prototype.owner;

    const prototypeSampleData = {};
    this.props.sampleData.map(sampleData => {
      prototypeSampleData[sampleData.name] = sampleData.values;
    });

    const prototypeStyles = {};
    this.props.styles.map(style => {
      console.log(style.code);
      prototypeStyles[style.name] = style.code;
    });

    this.state = {
      canEdit: isOwner || !this.props.prototype.owner,
      isLoggedIn: Meteor.userId() ? true : false,
      isOwner: isOwner,
      modal: false,
      playing: true,
      prototypeSampleData: prototypeSampleData,
      prototypeStypes: prototypeStyles,
    };

    this._handleTogglePlaying = this._handleTogglePlaying.bind(this);
    this._toggleModal = this._toggleModal.bind(this);
  }

  _toggleModal(modal) {
    this.setState({modal: modal});
  }

  _handleLogOut() {
    Meteor.logout(error => {
      if (error) {
        toast("Whoops, couldn't log you out...", {type: 'error'});
      } else {
        this.setState({isLoggedIn: false});
        toast('See you later!');
      }
    });
  }

  _handleLogIn() {
    Meteor.loginWithGoogle(error => {
      if (error) {
        toast("Whoops, couldn't log you in...", {type: 'error'});
      } else {
        this.setState({isLoggedIn: true});
        toast('Great to see you!');
      }
    });
  }

  _handleTogglePlaying() {
    const {playing} = this.state;
    this.setState({playing: !playing});
    toast(`Preview is ${playing ? 'paused' : 'reloading automatically'}`);
  }

  componentDidMount() {
    // Page action toasts
    const action = queryString.parse(location.search).action;
    switch (action) {
      case 'fork':
        toast('Sweet, this is a forked prototype...');
        break;
      case 'new':
        toast('Cowabunga, new prototype created!');
        break;
    }
  }

  componentWillUnmount() {
    const {prototype} = this.props;
    // If there's no difference between the created and updated time, delete it
    if (prototype.updatedAt === prototype.createdAt) {
      Meteor.call('deletePrototype', prototype._id);
    }
  }

  render() {
    const {prototype, loading} = this.props;
    const {canEdit} = this.state;
    const code = prototype ? prototype.code : '';

    if (_.isEmpty(prototype)) {
      return <NotFoundPage />;
    } else {
      return (
        <div>
          <PageComponents pageName={prototype.name || 'New prototype'} />
          <Modal
            show={this.state.modal}
            close={() => this.setState({modal: false})}
            {...this.props}
            {...this.state}>
            <Flex className="App Underlay">
              <Box auto style={{position: 'relative'}}>
                <Preview
                  togglePlaying={this._handleTogglePlaying}
                  {...this.state}
                  {...this.props}
                />
              </Box>
              <Box w={1 / 2} style={{position: 'relative'}}>
                <FramerEditor
                  code={code}
                  prototype={prototype}
                  {...this.state}
                />
                <EditControls
                  showAll={() => this._toggleModal('Prototypes')}
                  showSettings={() => this._toggleModal('Settings')}
                  showUtilities={() => this._toggleModal('Utilities')}
                  togglePlaying={this._handleTogglePlaying}
                  syntax={this.props.prototype.syntax}
                  handleLogIn={this._handleLogIn.bind(this)}
                  handleLogOut={this._handleLogOut.bind(this)}
                  {...this.state}
                />
              </Box>
            </Flex>
          </Modal>
        </div>
      );
    }
  }
}

Prototype.propTypes = {
  loading: PropTypes.bool,
  prototype: PropTypes.object,
  sampleData: PropTypes.array,
  styles: PropTypes.array,
};

export default Prototype;
