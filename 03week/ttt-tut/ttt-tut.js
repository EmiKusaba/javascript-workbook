$(document).ready(function () {
  let playerTurn = "X";
  let board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ];

  function loadBoard() {
    // Load DOM board into 'board' variable
    for (var row = 0; row < 3; ++row) {
      for (var col = 0; col < 3; ++col) {
        var squareSelector = "td[data-row=" + row + "][data-col=" + col + "]";
        var value = $(squareSelector).html();
        board[row][col] = value;
      }
    }
  };

  function resetBoard() {
    // Reset DOM board
    for (var row = 0; row < 3; ++row) {
      for (var col = 0; col < 3; ++col) {
        var squareSelector = "td[data-row=" + row + "][data-col=" + col + "]";
        $(squareSelector).html("-");
      }
    }
    // Reset 'board' variable
    board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"]
    ];
  }


  function checkMessage() {
    var msgDom = $("#message");
    var msg = msgDom.html();
    if (msg.includes("won")) {
      resetBoard();
      msgDom.html("");
      return true;
    }
    return false;
  }

  function horizontalWin() {
    // Your code here
    //check the rows board for a match
    if (board[0][0] === playerTurn &&
      board[0][1] === playerTurn &&
      board[0][2] === playerTurn
    ) {
      return true;
    } else if (
      board[1][0] === playerTurn &&
      board[1][1] === playerTurn &&
      board[1][2] === playerTurn
    ) {
      return true;
    } else if (
      board[2][0] === playerTurn &&
      board[2][1] === playerTurn &&
      board[2][2] === playerTurn
    ) {
      return true;
    }
    return false;
  }

  function verticalWin() {
    // Your code here
    //check columns of the board for a match
    if (board[0][0] === playerTurn &&
      board[1][0] === playerTurn &&
      board[2][0] === playerTurn
    ) {
      return true;
    } else if (
      board[0][1] === playerTurn &&
      board[1][1] === playerTurn &&
      board[2][1] === playerTurn
    ) {
      return true;
    } else if (
      //$("td[data-row=0][data-col=2]").html() == playerTurn
      board[0][2] === playerTurn &&
      board[1][2] === playerTurn &&
      board[2][2] === playerTurn
    ) {
      return true;
    }
    return false;
  }


  function diagonalWin() {
    // Your code here
    //check for an line pattern top left to bottom right on the board
    //check for an line pattern top right to bottom left on the board
    if (board[0][0] === playerTurn &&
      board[1][1] === playerTurn &&
      board[2][2] === playerTurn
    ) {
      return true;
    } else if (
      board[2][0] === playerTurn &&
      board[1][1] === playerTurn &&
      board[0][2] === playerTurn
    ) {
      return true;
    }
    return false;
  }

  function checkForWin() {
    // Your code here
    //check for horizonal, vertical, and diagnonal wins
    //return true if any of those checks return true
    if (horizontalWin() || verticalWin() || diagonalWin()) {
      // Someone won
      // Set message
      $("#message").html("Player " + playerTurn + " won!");
      return true;
    }
    return false;
  }


  $(".board-square").click(function () {
    // If there's a win message, clear board and return
    // Click again to start playing
    if (checkMessage()) {
      return;
    }
    // Set square value
    $(this).html(playerTurn);
    // Load DOM board into 'board' variable
    loadBoard();
    console.log(board);
    // Use 'board' variable to check for win
    if (checkForWin()) {
      return;
    }
    playerTurn = playerTurn === "X" ? "O" : "X";
  });
});
