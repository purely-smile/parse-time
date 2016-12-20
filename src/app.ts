// 分钟数和标准时间格式的相互装换

module.exports = function (timeStr) {
    if (typeof timeStr === 'number') {
        return min2Time(timeStr);
    } else if (typeof timeStr === 'string' && timeStr.match(':')) {
        return time2Min(timeStr);
    } else {
        throw new Error('min2Time 未知的timeStr参数' + timeStr);
    }
}

// 分钟数转时间

function min2Time(str) {
    // 转换负数
    str = Math.abs(str);

    let hour: number | string = Math.floor(str / 60);
    let minuter: number | string = str % 60;


    if (hour >= 24) {
        hour = hour % 24;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minuter >= 60) {
        minuter = minuter % 60;
    }
    if (minuter < 10) {
        minuter = '0' + minuter;
    }

    return hour + ':' + minuter;
}

// 时间转分钟数

function time2Min(str) {
    let [hour, minuter] = str.split(':');
    hour = parseInt(hour) || 0;
    minuter = parseInt(minuter) || 0;

    return hour * 60 + minuter;
}