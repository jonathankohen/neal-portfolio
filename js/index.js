var tagline = document.getElementById('tagline');

var typewriter = new Typewriter(tagline, {
	loop: true,
});

typewriter
	.typeString('A Design Nerd.')
	.pauseFor(2500)
	.deleteAll()
	.typeString('A Professional Web Designer.')
	.pauseFor(2500)
	.deleteAll()
	.typeString('A Visual Storyteller.')
	.pauseFor(2500)
	.start();
