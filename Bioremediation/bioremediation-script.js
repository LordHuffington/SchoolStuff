$(document).ready(function() {

	/*
		This code makes the clicked tab the active one.
	*/

	$(".tab").click(function() {

		var tabs = document.getElementsByClassName("tab");
		var tabID = $(this).attr("id");

		var pages = document.getElementsByName("page");
		var page;

		for(var i = 0; i < tabs.length; i++) {

			for(var j = 0; j < pages.length; j++) {

				if(pages[j].id == tabID) {

					page = pages[j];
				}
			}

			$(tabs[i]).removeClass("active");

			$(pages[i]).removeClass("show");
		}

		$(this).addClass("active");
		$(page).addClass("show");
	})

	/*
		This code ensures that the navigation block is fixed vertically,
		but scrolls horizontally.
	*/

	$(document).scroll(function() {

		$("#navBar").css({

			"left": 12 - $(document).scrollLeft()
		})
	})
})
