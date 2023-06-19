it.skip('should say hello world', () => {
    const greeting = require('./index').sayHello('world');
    expect(greeting).toBe('hello world');
});

it.skip('should start with hello', () => {
    const greeting = require('./index').sayHello('world');
    expect(greeting).toEqual(expect.stringMatching(/^hello/i));
});