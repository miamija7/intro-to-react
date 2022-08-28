import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// // Step 12
// class Square extends React.Component {
//     // Step 10
//     // // Step 5
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     };
//     // }
//
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()} // Step 10
//                 // onClick={() => this.setState({value: 'X'})} // Step 6
//                 // onClick={() => console.log('click')} // Step 3-4
//             >{
//                 this.props.value // Step 10
//                 // this.state.value // Step 6
//                 // this.props.value // Step 2
//             }
//             </button>
//         );
//     }
// }

// Step 12
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    // Step 7
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true, // Step 13
        };
    }

    // Step 11
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';    // Step 13
        // squares[i] = 'X';    // Step 13
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext, // Step 13
        });

    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]} // Step 8
            onClick={() => this.handleClick(i)} // Step 9
        />
        // return <Square value={i} />; // Step 1
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); // Step 13
        // const status = 'Next player: X'; // Step 13

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
