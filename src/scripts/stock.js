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
            gap        : '41px',
		},

        769: {
            fixedWidth : 'calc(50% - 10px)',
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

new Splide('#reviews_slide', {
    perPage: 1,
    perMove: 1,
    type: 'loop',

    fixedWidth: '50%',
    fixedHeight: '330px',

    breakpoints: {
		1025: {
            fixedHeight: '442px',
		},

        769: {
            perPage: 1,
            fixedWidth: 'calc(100% - 0px)',
            fixedHeight: '340px',
		},
    }
}).mount();

new Splide('#awards_slide', {
    type: 'loop',

    fixedWidth: '25%',
    fixedHeight: '440px',

    breakpoints: {
		1025: {
            fixedHeight: '348px',
		},

        769: {
            fixedWidth: '50%',
            fixedHeight: '504px',
        },

        630: {
            fixedWidth: '100%',
            fixedHeight: '504px',
        }
    },
}).mount();

new Splide('#about_slide', {
    type: 'loop',

    fixedWidth: 'calc(25% - 0px)',
    fixedHeight: '240px',

    breakpoints: {
		1025: {
            fixedHeight: '194px',
		},

        769: {
            fixedWidth: '50%',
            fixedHeight: '277px',
		},

        630: {
            pagination: false,

            fixedWidth: '100%',
            fixedHeight: '277px',
		},
    },

}).mount();
