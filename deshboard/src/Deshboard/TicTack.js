import React, { useRef, useState } from "react";
import circle_img from './Img/circle.png';
import cross_img from './Img/cross.png';

const TicTack = () => {
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [currentPlayer, setCurrentPlayer] = useState("x");
    const titleref = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const boxe1 = useRef(null);
    const boxe2 = useRef(null);
    const boxe3 = useRef(null);
    const boxe4 = useRef(null);
    const boxe5 = useRef(null);
    const boxe6 = useRef(null);
    const boxe7 = useRef(null);
    const boxe8 = useRef(null);
    const boxe9 = useRef(null);

    const box_arry = [boxe1, boxe2, boxe3, boxe4, boxe5, boxe6, boxe7, boxe8, boxe9];

    const handleNameChange = (e, player) => {
        if (player === "player1") {
            setPlayer1(e.target.value);
        } else {
            setPlayer2(e.target.value);
        }
    };

    const toggle = (e, num) => {
        if (lock) {
            return;
        }

        if (data[num] !== "") {
            return; // Prevent overriding a box that already has a value
        }

        const newData = [...data]; // Create a copy of the data array

        if (currentPlayer === "x") {
            e.target.innerHTML = `<img src='${cross_img}' alt="cross">`;
            newData[num] = "x";
            setCurrentPlayer("o");
        } else {
            e.target.innerHTML = `<img src='${circle_img}' alt="circle">`;
            newData[num] = "o";
            setCurrentPlayer("x");
        }

        setData(newData);
        setCount(count + 1);
        checkwin();
    };

    const checkwin = () => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let [a, b, c] of winningCombinations) {
            if (data[a] !== "" && data[a] === data[b] && data[a] === data[c]) {
                won(data[a]);
                return;
            }
        }

        if (!data.includes("")) {
            setLock(true);
            titleref.current.innerHTML = 'It\'s a draw!';
        }
    };

    const won = (winner) => {
        setLock(true);
        const winnerName = winner === "x" ? player1 : player2;
        titleref.current.innerHTML = `Congratulations ${winnerName} You Win!`;
    };

    const reset = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        setLock(false);
        setCurrentPlayer("x");
        setPlayer1("Player 1");
        setPlayer2("Player 2");
        titleref.current.innerHTML = 'TicTac Game';
        inputRef1.current.value = "";
        inputRef2.current.value = "";
        box_arry.forEach(box => {
            if (box.current) {
                box.current.innerHTML = "";
            }
        });
    };

    return (
        <>
            <div className="bg-dark text-white">
                <div className="container">
                    <h1 className="title" ref={titleref}>TicTac Game</h1>
                    <div className="players">
                        <div className="d-flex justify-content-between">
                            <div className="col-sm-6 flex-item">
                                <input
                                    type="text"
                                    ref={inputRef1}
                                    className="form-control player-input"
                                    value={player1}
                                    onChange={(e) => handleNameChange(e, "player1")}
                                    placeholder="Enter Player 1 Name"
                                />
                            </div>
                            <div className="col-sm-6 flex-item">
                                <input
                                    type="text"
                                    ref={inputRef2}
                                    className="form-control player-input"
                                    value={player2}
                                    onChange={(e) => handleNameChange(e, "player2")}
                                    placeholder="Enter Player 2 Name"
                                />
                            </div>
                        </div>

                    </div>
                    <p>Current Player: {currentPlayer === "x" ? player1 : player2}</p>
                    <div className="board">
                        <div className="row1">
                            <div className="boxes" ref={boxe1} onClick={(e) => toggle(e, 0)}></div>
                            <div className="boxes" ref={boxe2} onClick={(e) => toggle(e, 1)}></div>
                            <div className="boxes" ref={boxe3} onClick={(e) => toggle(e, 2)}></div>
                        </div>
                        <div className="row2">
                            <div className="boxes" ref={boxe4} onClick={(e) => toggle(e, 3)}></div>
                            <div className="boxes" ref={boxe5} onClick={(e) => toggle(e, 4)}></div>
                            <div className="boxes" ref={boxe6} onClick={(e) => toggle(e, 5)}></div>
                        </div>
                        <div className="row3">
                            <div className="boxes" ref={boxe7} onClick={(e) => toggle(e, 6)}></div>
                            <div className="boxes" ref={boxe8} onClick={(e) => toggle(e, 7)}></div>
                            <div className="boxes" ref={boxe9} onClick={(e) => toggle(e, 8)}></div>
                        </div>
                    </div>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </div>
            </div>
        </>
    );
};

export default TicTack;
