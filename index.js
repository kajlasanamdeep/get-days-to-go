module.exports = function (date) {
    let today = new Date(Date.now()).getTime();
    date = new Date(date).getTime();

    if (date > today) {
        let ms = (date - (today + (5 * 3600000 + 1800000)));
        let secs = Math.abs(new Date(ms).getSeconds() - new Date(0).getSeconds());
        let mins = Math.abs(new Date(ms).getMinutes() - new Date(0).getMinutes());
        let hrs = Math.abs(new Date(ms).getHours() - new Date(0).getHours());
        let days = Math.abs(new Date(ms).getDate() - new Date(0).getDate());
        let month = Math.abs(new Date(ms).getMonth() - new Date(0).getMonth());
        let year = Math.abs(new Date(ms).getFullYear() - new Date(0).getFullYear());

        return {
            year: year,
            month: month,
            days: days,
            hrs: hrs,
            mins: mins,
            secs: secs
        }
    }
    else {
        return {
            year: 0,
            month: 0,
            days: 0,
            hrs: 0,
            mins: 0,
            secs: 0
        }
    }

}