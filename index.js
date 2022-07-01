module.exports = function (date) {

    let today = new Date();
    date = new Date(date);
    if (date > today) {
        let ms = (date - today) - 19800000;
        let secs = parseInt(ms / 1000);
        let mins = 0;
        let hrs = 0;
        let days = 0;

        if (secs > 60) {
            mins = parseInt(secs / 60);
            secs = secs - (mins * 60);
            if (mins > 60) {
                hrs = parseInt(mins / 60);
                mins = mins - (hrs * 60);
                if (hrs > 24) {
                    days = parseInt(hrs / 24);
                    hrs = hrs - (days * 24);
                }
            }
        }

        return {
            days: days,
            hrs: hrs,
            mins: mins,
            secs: secs
        }
    }
    else {
        let ms = (today - date) + 19800000;
        let secs = parseInt(ms / 1000);
        let mins = 0;
        let hrs = 0;
        let days = 0;

        if (secs > 60) {
            mins = parseInt(secs / 60);
            secs = secs - (mins * 60);
            if (mins > 60) {
                hrs = parseInt(mins / 60);
                mins = mins - (hrs * 60);
                if (hrs > 24) {
                    days = parseInt(hrs / 24);
                    hrs = hrs - (days * 24);
                }
            }
        }

        return {
            days: -days,
            hrs: -hrs,
            mins: -mins,
            secs: -secs
        }

    }
}