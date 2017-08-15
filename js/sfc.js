
$("#page").prop("class", 'pageintro');


new Waypoint({
    element: document.getElementById('aboutsfc'),
    handler: function (direction) {
        $("#page").prop("class", 'aboutsfc');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('pageintro'),
    handler: function (direction) {
        $("#page").prop("class", 'pageintro');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('pagecontact'),
    handler: function (direction) {
        $("#page").prop("class", 'pagecontact');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('pagehelpme'),
    handler: function (direction) {
        $("#page").prop("class", 'pagehelpme');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('pageteam'),
    handler: function (direction) {
        $("#page").prop("class", 'pageteam');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('pageservices'),
    handler: function (direction) {
        $("#page").prop("class", 'pageservices');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('pagefeedback'),
    handler: function (direction) {
        $("#page").prop("class", 'pagefeedback');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('accreditation'),
    handler: function (direction) {
        $("#page").prop("class", 'accreditation');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('cpd'),
    handler: function (direction) {
        $("#page").prop("class", 'cpd');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('etimesheet'),
    handler: function (direction) {
        $("#page").prop("class", 'etimesheet');
    },
    offset: '5%'
});

new Waypoint({
    element: document.getElementById('research'),
    handler: function (direction) {
        $("#page").prop("class", 'research');
    },
    offset: '5%'
});

