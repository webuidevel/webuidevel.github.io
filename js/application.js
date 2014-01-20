$(document).ready(function() {
	
	// Redirect external links
	$("a[rel='external']").click(function(){
		this.target = "_blank";
	});

	// Initialize Foundation
	$(document).foundation();

	// Mixitup Filter
	$('#filters').mixitup();

});