const keys = [];

const LEFT = 0;
const RIGHT = 1;
const UP = 2;
const DOWN = 3;

const movingKeys = [];
const allTheRightMoves = [];

function initKeyboard() {
    document.body.onkeydown = function(event) {
        keyDown(event);
    }
    document.body.onkeyup = function(event) {
        keyUp(event);
    }
    initMovingSystem();
}
function initMovingSystem() {
    movingKeys[LEFT] = "A";
    movingKeys[RIGHT] = "D";
    movingKeys[UP] = "W";
    movingKeys[DOWN] = "S";

    allTheRightMoves[LEFT] = [-1, 0];
    allTheRightMoves[RIGHT] = [1, 0];
    allTheRightMoves[UP] = [0, -1];
    allTheRightMoves[DOWN] = [0, 1];
}

function keyDown(event) {
    keys[event.key.toUpperCase()] = true;
}
function keyUp(event) {
    keys[event.key.toUpperCase()] = false;
}