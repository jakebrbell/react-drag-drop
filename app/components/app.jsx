import React from 'react';
import Board from './Board';

const App = React.createClass({
  render() {
    return <div>
      <Board knightPosition={[4, 7]} />
    </div>;
  }
});

export default App;
