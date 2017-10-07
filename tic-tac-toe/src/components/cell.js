import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {clickCell, IN_PROGRESS} from '../actions'

class Cell extends React.Component {

    constructor(props) {
        super(props);

        _.bindAll(this, 'onCellClick');
    }

    onCellClick() {
        const {x, y, sign, gameState, clickCell} = this.props;
        if (!sign && gameState === IN_PROGRESS) {
            clickCell(x, y);
        }
    }

    render() {
        return (
            <div
                className="cell"
                onClick={this.onCellClick}
            >
                {this.props.sign}
            </div>
        );
    }
}

function mapStateToProps({cells, gameState}, {x, y}) {
    return {
        sign: cells[x][y],
        gameState
    }
}

export default connect(mapStateToProps, {clickCell})(Cell);