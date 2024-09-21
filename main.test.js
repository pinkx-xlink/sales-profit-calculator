const getLaborRate = require('./main');

test('multiplies labor hours x hourly rate = labor cost', () => {
    expect(getLaborRate(8, 20)).toBe(160);
})