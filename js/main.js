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
    var preStrike = moment(strikeStart).subtract(24, 'hours');

    var $answer = $('#answer');
    var msg = 'NOPE'; // Let's be optimistic!

    if (now.isBetween(strikeStart, strikeEnd)) {
        // The strike is on
        msg = 'YEP...';
    } else if (now.isBetween(preStrike, strikeStart)) {
        // We are 24 hours before the strike
        msg = 'NOT YET';
    }

    $answer.html(msg);

})();
