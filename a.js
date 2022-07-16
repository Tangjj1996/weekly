function asteroidCollision(asteroids = []) {
    const stack = [];
    for (let ast of asteroids) {
        if (ast > 0) {
            stack.push(ast);
        } else {
            while (!stack.isEmpty() && stack.peek() > 0 && stack.peek() + ast <= 0) {
                stack.pop();
            }
            if (stack.isEmpty() || stack.peek() < 0) {
                stack.push(ast);
            }
        }
    }
    return stack;
}

Array.prototype.peek = function() {
    return this[this.length - 1];
}

Array.prototype.isEmpty = function() {
    return this.length === 0;
}

console.log(asteroidCollision([11, 8, 2, -5, -8, 3]))