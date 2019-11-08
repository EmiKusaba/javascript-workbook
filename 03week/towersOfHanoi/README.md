1. Get the current startStack and endstack value (either through user input or test values)
inside the towersOfHanoi function
-Pass those values to isLegalfunction
-Pass those value to move Piece function

2. Check that a piece is allowes to move (isLehal function)
-Use the startStack and endStack value to determine if it would be a legal move bases off the rule of the game.
-starStack and endStack shouls be different letters
-A bigger number can not be placed on top of smaller number
-Any number ca be placed onto an empty atack (array inside the stacks object)
-Nice to have : return aneerow message (string) telling the user if their input is valid (should be "a," "b",or "c")
-NIce to have: futher input validation like making sure the starStack/endStack values are 1 charactor long ( there are a lot of other cases to think about it too)
3. Move a piece from one stack to another. (movePeace function)
-Update the stacks object inside of the move piece function using the startStack and endStack values.
-Take the value from the end of startStack array and add to the end of the endStack array
-maybe use.pop?, shift? or different array methods.
4. Check to see if the game is won (checkForWin function)
-when all the blocks are stacked into colum 2 or 1 return true otherwise false
-Nice to hace console log a winning message.


