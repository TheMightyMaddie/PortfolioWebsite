AOS.init({
	duration: 1200,
});

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
	});
}
bindHandlers();

