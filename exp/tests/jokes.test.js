const jokes = require('../jokes.js');

describe('Jokes array', () => {
  test('should be an array', () => {
    expect(Array.isArray(jokes)).toBe(true);
  });

  test('should not be empty', () => {
    expect(jokes.length).toBeGreaterThan(0);
  });

  test('should have the correct number of jokes', () => {
    expect(jokes.length).toBe(23);
  });

  describe('Each joke', () => {
    jokes.forEach((joke, index) => {
      describe(`Joke ${index + 1}`, () => {
        test('should have an id property', () => {
          expect(joke).toHaveProperty('id');
        });

        test('should have a text property', () => {
          expect(joke).toHaveProperty('text');
        });

        test('should have an author property', () => {
          expect(joke).toHaveProperty('author');
        });

        test('should have a numeric id', () => {
          expect(typeof joke.id).toBe('number');
        });

        test('should have a non-empty text', () => {
          expect(typeof joke.text).toBe('string');
          expect(joke.text.length).toBeGreaterThan(0);
        });

        test('should have a non-empty author', () => {
          expect(typeof joke.author).toBe('string');
          expect(joke.author.length).toBeGreaterThan(0);
        });
      });
    });
  });

  test('should have unique ids', () => {
    const ids = jokes.map(joke => joke.id);
    const uniqueIds = [...new Set(ids)];
    expect(ids.length).toBe(uniqueIds.length);
  });

  test('should have sequential ids starting from 1', () => {
    const ids = jokes.map(joke => joke.id);
    for (let i = 0; i < ids.length; i++) {
      expect(ids[i]).toBe(i + 1);
    }
  });
});