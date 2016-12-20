{
    let timeParse = require('./app');
    let assert = require('assert');


    describe('测试min2time模板', () => {
        it('分钟数转时间', () => {
            assert.equal(timeParse(72), '01:12');
        });

        it('分钟数超过24小时', () => {
            assert.equal(timeParse(1500), '01:00');
        });

        it('分钟数超过12小时的转换', () => {
            assert.equal(timeParse(721), '12:01');
        });

        it('分钟数为0的转换', () => {
            assert.equal(timeParse(0), '00:00');
        });

        it('时间转分钟数', () => {
            assert.equal(timeParse('01:00'), '60');
        });

        it('时间为0点的转换', () => {
            assert.equal(timeParse('00:00'), '0');
        });
    });

}

