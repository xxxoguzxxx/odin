// Gameboard Module
const Gameboard = (() => {
    let board = Array(9).fill(null);

    const getBoard = () => board;
    const setCell = (index, player) => {
        if (board[index] === null) {
            board[index] = player;
            return true;
        }
        return false;
    };
    const reset = () => {
        board = Array(9).fill(null);
    };

    return { getBoard, setCell, reset };
})();

// Player Factory
const Player = (name, symbol) => {
    return { name, symbol };
};

// Game Controller Module
const GameController = (() => {
    let players = [Player("Player 1", "X"), Player("Player 2", "O")];
    let currentPlayerIndex = 0;
    let isGameActive = true;

    const getCurrentPlayer = () => players[currentPlayerIndex];
    const switchPlayer = () => {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    };
    const playRound = (index) => {
        if (!isGameActive) return false;

        const player = getCurrentPlayer();
        if (Gameboard.setCell(index, player.symbol)) {
            if (checkWinner()) {
                isGameActive = false;
                return { status: "win", player: player.name };
            }
            if (Gameboard.getBoard().every(cell => cell !== null)) {
                isGameActive = false;
                return { status: "draw" };
            }
            switchPlayer();
            return { status: "continue" };
        }
        return false;
    };
    const checkWinner = () => {
        const board = Gameboard.getBoard();
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return lines.some(([a, b, c]) => 
            board[a] && board[a] === board[b] && board[a] === board[c]
        );
    };
    const reset = () => {
        Gameboard.reset();
        currentPlayerIndex = 0;
        isGameActive = true;
    };

    return { getCurrentPlayer, playRound, reset, getBoard: Gameboard.getBoard };
})();

// Display Controller Module
const DisplayController = (() => {
    const render = () => {
        const board = GameController.getBoard();
        console.log(board);
    };

    return { render };
})();