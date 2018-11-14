// Enemies our player must avoid
class Enemy {
    constructor(y) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // Enemies X & Y position properties
        this.x = Math.floor(Math.random() * 404);
        this.y = y;

        // Random Enemy initial speed
        this.speed = Math.floor(Math.random() * 500) + 100;

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.

        // Make enemies move
        this.x += this.speed * dt;
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        // Set initial player positions
        this.x = 202;
        this.y = 395;

        // The image/sprite for our player
        this.sprite = 'images/char-boy.png';

    }

    update(dt) {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Configure player moves
    handleInput(key) {
        if(key === 'right' && this.x < 404) {
            this.x += 101;
        } else if(key === 'left' && this.x > 0) {
            this.x -= 101;
        } else if(key === 'up' && this.y > -20) {
            this.y -= 83;
        } else if(key === 'down' && this.y < 395) {
            this.y += 83;
        };
    }
};


// Place the three enemies rows in an array
const enemiesRows = [63, 146, 229];

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];

// Instantiate enemies & push them to allEnemies array
enemiesRows.forEach((enemyRow) => {
    allEnemies.push(new Enemy(enemyRow));
});

// Place the player object in a variable called player
const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
