import createReactClass from 'create-react-class';
import createMockComponent from './createMockComponent';
import PropTypes from 'prop-types';

const Picker = createReactClass({
  propTypes: {
    children: PropTypes.node
  },
  statics: {
    Item: createMockComponent('Picker.Item')
  },
  render() {
    return null;
  }
});

module.exports = Picker;
