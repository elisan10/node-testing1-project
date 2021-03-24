const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  it("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  it("[2] returns a copy, leaving the original object intact", () => {
    // ✨ test away
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toMatchObject(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  it("[3] returns an object with the properties trimmed", () => {
    // ✨ test away
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  it("[4] the object returned is the exact same one we passed in", () => {
    // ✨ test away
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toMatchObject(expected);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  it("[5] returns the largest number in an array of numbers", () => {
    // ✨ test away
    const input = [2, 9, 4, 6];
    const expected = 9;
    const actual = utils.findLargestInteger(input);
    expect(actual).toBe(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  it("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    // ✨ test away
    expect(counter.initialNumber).toEqual(3);
  });
  it("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    // ✨ test away
    const input = counter.initialNumber;
    const expected = 2;
    const actual = counter.countDown(input);
    expect(actual).toBe(expected);
  });
  it("[8] the count eventually reaches zero but does not go below zero", () => {
    // ✨ test away
    const input = -1;
    const expected = 0;
    const actual = counter.countDown(input);
    expect(actual).toBe(expected);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
  });
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
  });
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
  });
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
  });
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
  });
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  it("[15] driving the car returns the updated odometer", () => {
    // ✨ test away
  });
  it("[16] driving the car uses gas", () => {
    // ✨ test away
  });
  it("[17] refueling allows to keep driving", () => {
    // ✨ test away
  });
  it("[18] adding fuel to a full tank has no effect", () => {
    // ✨ test away
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  it("[19] resolves true if passed an even number", async () => {
    // ✨ test away
    const evenNumber = await utils.isEvenNumberAsync(2);
    expect(evenNumber).toBe(true);
  });
  it("[20] resolves false if passed an odd number", async () => {
    // ✨ test away
    const oddNumber = await utils.isEvenNumberAsync(3);
    expect(oddNumber).toBe(false);
  });
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    // ✨ test away
    utils
      .isEvenNumberAsync("foo")
      .then((string) => {
        console.log(string);
      })
      .catch((error) => {
        expect(error).toEqual("number must be a number");
      });
  });
  it('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    // ✨ test away
    utils
      .isEvenNumberAsync(NaN)
      .then((notNumber) => {
        console.log(notNumber);
      })
      .catch((error) => {
        expect(error).toEqual("number must be a number");
      });
  });
});
