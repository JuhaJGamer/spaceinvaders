const canvas = document.getElementById('gamecanvas');
const context = canvas.getContext('2d');

invaders = [
	[
		[
			[0,0,0,0,1,1,1,1,0,0,0,0],
			[0,1,1,1,1,1,1,1,1,1,1,0],
			[1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,0,0,1,1,0,0,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1],
			[0,0,1,1,1,0,0,1,1,1,0,0],
			[0,1,1,0,0,1,1,0,0,1,1,0],
			[0,0,1,1,0,0,0,0,1,1,0,0]
		]
	],

]