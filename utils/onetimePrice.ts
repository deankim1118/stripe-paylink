interface PriceLink {
  price: string;
  link: string;
}

export const oneTimePrice: PriceLink[] = [
  { price: '10', link: 'https://donate.stripe.com/fZedT2bEl1uX1KocMU' },
  { price: '25', link: 'https://donate.stripe.com/8wM02cbElehJfBe4gp' },
  { price: '50', link: 'https://donate.stripe.com/3cseX6dMt6Ph0Gk7sC' },
  { price: '100', link: 'https://donate.stripe.com/00g02cfUB6Ph74I3cn' },
  { price: '200', link: 'https://donate.stripe.com/00g4iseQx0qT4WA3co' },
  { price: 'custom', link: 'https://donate.stripe.com/9AQ6qAcIp7Tl2OsfYY' },
];

export const monthlyPrice: PriceLink[] = [
  { price: '10', link: 'https://donate.stripe.com/00g16gbElb5x4WAdQS' },
  { price: '25', link: 'https://donate.stripe.com/9AQ16g0ZHa1tfBeeV7' },
  { price: '50', link: 'https://donate.stripe.com/fZebKU37P0qTgFi8wK' },
  { price: '100', link: 'https://donate.stripe.com/28o5mw6k17Tl0GkbIM' },
  { price: '200', link: 'https://donate.stripe.com/6oEbKUgYFc9B60EcMR' },
  { price: '500', link: 'https://donate.stripe.com/7sIeX67o5ehJagU7sz' },
];
