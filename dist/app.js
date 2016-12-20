// 分钟数和标准时间格式的相互装换
"use strict";
module.exports = function (timeStr) {
    if (typeof timeStr === 'number') {
        return min2Time(timeStr);
    }
    else if (typeof timeStr === 'string' && timeStr.match(':')) {
        return time2Min(timeStr);
    }
    else {
        throw new Error('min2Time 未知的timeStr参数' + timeStr);
    }
};
// 分钟数转时间
function min2Time(str) {
    // 转换负数
    str = Math.abs(str);
    var hour = Math.floor(str / 60);
    var minuter = str % 60;
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
    var _a = str.split(':'), hour = _a[0], minuter = _a[1];
    hour = parseInt(hour) || 0;
    minuter = parseInt(minuter) || 0;
    return hour * 60 + minuter;
}
