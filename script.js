let pxl = 10,
	colors = ['#ffffff', '#FF59D6', '#EBFF66'],
	trails = ['#trail1', '#trail2', '#trail3', '#trail4', '#trail5'];

gsap.fromTo('#astronaut, .ufo', {
	y: 0
}, {
	duration: 'random(1, 2)',
	y: '-=100',
	//modifiers: {y:function(y){return Math.round(y/pxl)*pxl;}},
	stagger:{
		each: 0.2,
		yoyo: true,
		repeat: -1,
		repeatRefresh: true
	}
});

gsap.set('.green-lights', {y: '-=10'});
document.querySelectorAll('#ufo, .ufo').forEach(function(ufo)
	{
		let paths = ufo.querySelectorAll('.pink-lights path, .green-lights path'),
			t = gsap.utils.random(0.1, 0.5);

		gsap.fromTo(paths, {
			opacity: 0,
		}, {
			duration: t,
			opacity: 1,
			stagger: {
				each: t / 2,
				repeat: -1,
				yoyo: true,
				repeatDelay: (paths.length * t / 2) / 4
			},
			ease: 'none'
		}, t/2);
	}
);

gsap.fromTo('#lights1 path',
{
	fill: '#cc0099'
},
{
	duration: .2,
	fill: '#EBFF66',
	stagger: {
		each: .06,
		repeat: -1,
		yoyo: true,
		repeatDelay: .13,
		ease: 'none'
	}
});

for(let i = 1; i <= 50; i++){
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	if(i <= 25){
		document.querySelector('#trailsBehind').appendChild(path);
	}else{
		document.querySelector('#trailsInfront').appendChild(path);
	}
}

gsap.fromTo('.trails path', {
	opacity: 'random(0.0, 0.7)',
	x: 3671,
	y: 'random(0, 1841, 21)',
	attr: {
		'fill': gsap.utils.wrap(colors), 
		'xlink:href': gsap.utils.wrap(trails)
	},
	onComplete: function()
	{
		this._targets[0].setAttribute('fill', gsap.utils.random(colors));
		this._targets[0].setAttribute('d', document.querySelector(gsap.utils.random(trails)).getAttribute('d'));
	}
}, {
	duration: gsap.utils.random(0.5, 2),
	x: -600,
	y: '-=320',
	stagger: {
		each: .2,
		repeat: -1,
		repeatRefresh: true
	},
	ease: 'none'
}).seek(100);