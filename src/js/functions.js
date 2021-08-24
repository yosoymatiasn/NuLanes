$(function () {
	const sections = $("section, .banner");

	$(".hamburger-toggle").click(function (e) {
		e.preventDefault();
		$(".mobile-menu").toggleClass("menu-open");
		$(this).toggleClass("menu-open");
	});

	$(".purpose-card").hover(function (e) {
		$this = $(this);
		$this.toggleClass("display-chart");
	});

	$(".contact-module").hover(
		function () {
			var button = $(this).find(".contact-module__button");
			if (!button.hasClass("shimmy")) {
				button.addClass("shimmy");
				setTimeout(() => {
					button.toggleClass("shimmy");
				}, 600);
			}
		},
		() => {}
	);

	const header = $("header, .nav, .logo, .hamburger-toggle");

	$(window).scroll(function () {
		$this = $(this);
		var topWindow = $this.scrollTop();
		var windowHeight = $this.height();
		// sticky header toggle
		header.toggleClass("sticky", topWindow > 0);

		// scroll arrow fade
		var position = 1 - topWindow / windowHeight;
		$(".arrow-wrap").css("opacity", position);

		// current nav link
		sections.each((i, item) => {
			$item = $(item);
			var elementTop = $item.offset().top;
			var elementBottom = elementTop + $item.outerHeight();

			var viewportTop = topWindow;
			var viewportMiddle = viewportTop + windowHeight / 2;

			const navLinks = $(".nav__item>a");

			if (elementBottom > viewportTop && elementTop < viewportMiddle) {
				navLinks.each((i, link) => {
					$link = $(link);
					var text = $link.attr("name");
					if (item.id && text.indexOf(item.id) > -1) {
						$link.parent().addClass("active-link");
					} else {
						$link.parent().removeClass("active-link");
					}
				});
			}
		});
	});

	stickyScroll();
});

function stickyScroll() {
	var lastScrollY = 0;
	var currentScrollY = 0;
	const header = $("header");

	$(window).scroll(function () {
		$this = $(this);
		currentScrollY = $this.scrollTop();
		if (currentScrollY < 800) return;

		if (currentScrollY < lastScrollY) {
			pin();
		} else if (currentScrollY > lastScrollY) {
			unpin();
		}
		lastScrollY = currentScrollY;
	});

	function pin() {
		if (header.hasClass("header-unpinned")) {
			header.removeClass("header-unpinned");
		}
		header.addClass("header-pinned");
	}

	function unpin() {
		if (header.hasClass("header-pinned")) {
			header.removeClass("header-pinned");
		}
		header.addClass("header-unpinned");
	}
}
