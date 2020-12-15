function geturl(theUrl) {
	var resptext = jQuery.get({
			url: theUrl
			, async: false
		})
		.responseText;
	console.log("AJAX response");
	console.log(resptext);
	return resptext;
};
