const tagline = document.getElementById('tagline');

const typewriter = new Typewriter(tagline, {
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

const sendEmail = () => {
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	window.open(
		`mailto:${email}?subject=Design%20Project%20Inquiry&body=${message}`,
	);
};
