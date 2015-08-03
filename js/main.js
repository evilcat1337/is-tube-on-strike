(function () {

    'use strict';

    /**
     * Date of the next Tube strike
     * YYYY-MM-DD HH:mm
     * @type {Object}
     */
    var strike = {
        start: '2015-08-05 18:30',
        end: '2015-08-07 00:00 '
    };

    var now = moment();
    var strikeStart = moment(strike.start);
    var strikeEnd = moment(strike.end);

    var $answer = $('#answer');

    if (now.isBetween(strikeStart, strikeEnd)) {
        $answer.html('YEP...');
    } else {
        $answer.html('NOPE');
    }

})();
