$(function () {
	$(".hamburger-toggle").click(function (e) {
		e.preventDefault();
		$(".mobile-menu").toggleClass("menu-open");
		$(this).toggleClass("menu-open");
	});

	$(window).resize(function () {});
});
