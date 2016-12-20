"use strict";
{
    var timeParse_1 = require('./app');
    var assert_1 = require('assert');
    describe('测试min2time模板', function () {
        it('分钟数转时间', function () {
            assert_1.equal(timeParse_1(72), '01:12');
        });
        it('分钟数超过24小时', function () {
            assert_1.equal(timeParse_1(1500), '01:00');
        });
        it('分钟数超过12小时的转换', function () {
            assert_1.equal(timeParse_1(721), '12:01');
        });
        it('分钟数为0的转换', function () {
            assert_1.equal(timeParse_1(0), '00:00');
        });
        it('时间转分钟数', function () {
            assert_1.equal(timeParse_1('01:00'), '60');
        });
        it('时间为0点的转换', function () {
            assert_1.equal(timeParse_1('00:00'), '0');
        });
    });
}
