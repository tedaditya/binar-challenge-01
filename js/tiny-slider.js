let slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: true,
    autoplayButton: '.auto',
    autoplayText: ['Start', 'Stop'],
    controlsContainer: '#controls',
    prevButton: '.previous',
    nextButton: '.next',
    responsive: {
        800: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});