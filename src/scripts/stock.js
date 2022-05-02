new Splide( '#stock_slide', {
    type: 'loop',
    perPage: 1,
    perMove: 1,

    fixedWidth : '410px',
    fixedHeight: '410px',
    gap        : '30px',

    breakpoints: {
		1025: {
            fixedWidth : '300px',
            fixedHeight: '300px',
            gap        : '42px',
		},

        769: {
            fixedWidth : '354px',
            fixedHeight: '354px',
            gap        : '20px',
		},

        630: {
            fixedWidth : '280px',
            fixedHeight: '280px',
            gap        : '10px',
		},
    }

} ).mount();

new Splide('#doc_slide', {
    type: 'loop',
    pagination: false,
}).mount();