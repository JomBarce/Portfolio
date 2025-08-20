export class GameState {
    constructor() {
        this.state = 'start';
        this.currentGame = null;
    }

    setGame(game) {
        this.currentGame = game;
    }
}