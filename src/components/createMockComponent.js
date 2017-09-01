import React from 'react';

function createMockComponent(displayName) {
  return createReactClass({
    displayName,
    render() {
      return null;
    },
  });
}

module.exports = createMockComponent;
