var jRes = jRespond([
    {
        label: 'handheld',
        enter: 0,
        exit: 750
    },
    {
        label: 'desktop',
        enter: 751,
        exit: 100000
    }
]);

// register enter and exit functions for a single breakpoint
jRes.addFunc({
    breakpoint: 'handheld',
    enter: function() {
	    Modernizr.load({
		    load: 'http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js'
	    });
    },
    exit: function() {
    }
});
