// AOS.init({
// 	duration: 1200,
// });

function renderView(element) {
	$('.page').each(function() {
		$(this).removeClass('show');
	})
	let className = $(element).data().view;
	$(`.${className}`).addClass('show');

}

function bindHandlers () {
	$('.navLink').off('click').click(function() {
		$('.navLink').each(function () {
			$(this).removeClass('selectedNav');
		})
		$(this).addClass('selectedNav');
		renderView(this);
		bindHandlers();
	});

	AOS.init({
		duration: 1200,
	});
}
bindHandlers();


function rippleEffect(event) {
	let targetBoundingRect = event.currentTarget.getBoundingClientRect();
	let x = event.clientX - targetBoundingRect.x;
	let y = event.clientY - targetBoundingRect.y;
	let ripples = document.createElement('span');
	ripples.style.left = `${x}px`;
	ripples.style.top = `${y}px`;
	ripples.classList.add('ripple');
	event.currentTarget.appendChild(ripples);
	setTimeout(() => {
		ripples.remove();
	}, 600);
}

