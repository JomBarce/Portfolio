import { GameState } from './games/gameState.js';

import ImageView from './graphics/views/imageView.js';

const gameState = new GameState();

const gameCanvas = document.getElementById('game');
const currentView = new ImageView(gameCanvas);

await currentView.init();
currentView.animate();