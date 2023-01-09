const keys = [];

function initKeyboard() {
    document.body.onkeydown = function(event) {
        keyDown(event);
    }
    document.body.onkeyup = function(event) {
        keyUp(event);
    }
}

function keyDown(event) {
    keys[event.key] = true;
}
function keyUp(event) {
    keys[event.key] = false;
}