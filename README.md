# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting the App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Interview Assignment

### Overview

Your task is to write an app that functions as a chess clock. This is untimed but should take less than 2 hours to complete.

Chess clock

![chess clock](https://cdn.pixabay.com/photo/2017/03/18/16/19/clock-2154424_1280.png)

A chess clock is used in a two player game of chess to keep track of the time spent by each player on their turn. The clock counts down and prevents the player from delaying the game and using up their allotted time.

The clock can be configured for any amount of time but for the purposes of this exercise, each player should be allotted 5 minutes.

In chess the white side always goes first. Thus when the start button is pressed, the white clock should start counting down. When a player makes a move and wants to end their turn, they press a button which stops their clock, and starts the other player's clock.

When either player’s clock reaches zero, the game is over and the other player is declared the winner.

The clock is then reset and ready for the next game.

### Your Task

Create an app that will run in the browser that implements the basic chess clock functionality. The app should: 
- Start in a state where both players have 5 minutes on their clock and neither should be counting down.
- There should be a button to start the game,
- There should be two additional buttons, one for each player, that can be pressed when a player completes their turn.
- When it becomes a player’s turn, their timer should begin to countdown. 
- When one of the clocks reaches zero, the game is over. The timers should stop and a message should appear to indicate which player was the winner.

In addition, we would ask that you style the app to match the designs in this specification. The figma file defines 3 different “screens”, and the various states of each. One for a new game, one for a live game, and one for the end of a game.

[Figma Here](https://www.figma.com/file/IeeF31cXCynNDukzzJMNyu/Chess-Clock?node-id=0%3A1)

### Submission

Open a PR on this repository, and then provide a link to this PR in the code submission portion in Greenhouse. Please include instructions for setting up the app and running any unit tests if they are included.

We will be primarily evaluating your code on the following criteria:

- Good development practices
- Clarity of thought and expression
- Ability to break down a design into components
- Correctness of solution

Thanks! We hope this is fun. Please let us know if you have any questions.




