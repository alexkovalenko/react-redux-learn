import React from 'react';
import {connect} from 'react-redux';
import Grid from './grid';
import {startNewGame} from '../actions';

class App extends React.Component {
    render() {
        const {gameState} = this.props;
        return (
            <div className="app">
                {`State: ${gameState}`}
                <Grid/>
                <button
                    className="btn btn-primary"
                    onClick={this.props.startNewGame}
                >
                    New Game
                </button>
            </div>
        );
    }
}

function mapStateToProps({gameState, turns}) {
    return {gameState, turns}
}

export default connect(mapStateToProps, {startNewGame})(App);
