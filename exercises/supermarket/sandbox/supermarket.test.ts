import { Checkout } from './Checkout'

const rules = [
  {
    item: "A",
    unitPrice: 1.50,
    specialPrice: {
      pricingSchema: "X-items-for-$Y", x: 3, y: 4
    }
  },
  {
    item: "B",
    unitPrice: 1,
    specialPrice: {
      pricingSchema: "buy-X-get-Y-forfree", x: 3, y: 1
    }
  }
]

it('calculates single item', () => {
  const co = new Checkout(rules);
  const price = co.scan("A")
  expect(price).toEqual(1.50);
})

it('calculates 3 items price', () => {
  const co = new Checkout(rules);
  const price = co.scan("AAA");
  expect(price).toEqual(4);
})

it('calculates 2 items price', () => {
  const co = new Checkout(rules);
  const price = co.scan("AA");
  expect(price).toEqual(3);
})

it('calculates 4 items price', () => {
  const co = new Checkout(rules);
  const price = co.scan("AAAA");
  expect(price).toEqual(5.5);
})

it('calculates 2 packs price', () => {
  const co = new Checkout(rules);
  const price = co.scan("AAAAAA");
  expect(price).toEqual(8);
})

it('calculates 2 types of items', () => {
  const co = new Checkout(rules);
  const price = co.scan("AB");
  expect(price).toEqual(2.5);
})

it('calculates buy-3-get-1-forfree schema', () => {
  const co = new Checkout(rules);
  const price = co.scan("BBBB");
  expect(price).toEqual(3);
})

it('calculates buy-3-get-1-forfree schema with 1 extra', () => {
  const co = new Checkout(rules);
  const price = co.scan("BBBB" + "BBBB");
  expect(price).toEqual(3 + 3);
})


