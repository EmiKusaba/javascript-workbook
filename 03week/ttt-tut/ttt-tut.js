const squares = document.querySelectorAll('board-square');
squares.forEach(function(item) {
  item.addEventLisner("click",test);
});

function handleClick (event){
  // console.log({target: target.target});
  let square = event.target;
  square.textContent = Playturn ;
  let squareCol = square.dataset.col;
  let squareRow = square.dataset.row;
  console.log(squareCol, squareRow);
  ticTctoe(squareCol, squareRow);
}

//