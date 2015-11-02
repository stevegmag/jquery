jQuery(document).ready( function() { 
	var $ = jQuery;
	var re = new RegExp("^(http|https)://", "i");
	var root = new RegExp(window.location.host,'i');
	// needds to handle www. & non-www. urls the same

// may need to add more specific selector depending on site
	$('a').each(function() {
		if($(this).attr('href')) {
			//link has an href
			var testURL = $(this).attr('href');
			console.log("TestURL :: "+ testURL);
			
		    if(root.test(testURL)) { // URL matches current location
		        $(this).addClass('local');
		    }
		    else {
				if(re.test(testURL)) { 
				// URL Starts with http(s)
			        // a link that does not contain the current host
			        if(testURL.length > 1) {
			            $(this).addClass('external');
			        }
			        else {
			            $(this).addClass('wonky-link');
			        }
			    }
			}    
		}
	});

	$('a.external').on('click', function(e) {

	    e.preventDefault();
	    e.stopPropagation();

	    var answer = confirm("You are now leaving Acromegaly.com. Links to all outside websites do not imply a recommendation by Chiasma. Chiasma accepts no responsibility or liability for the content or services of other websites.");

	    if (answer) {
	    	var win = window.open($(this).attr('href'), '_blank');
			win.focus();
	    } 

	});

});
