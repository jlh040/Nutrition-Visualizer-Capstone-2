import getUrl from './config';

it('returns the right URL when trying to bulk up', () => {
  expect(getUrl('bulk up')).toContain('minCalories=400');
  expect(getUrl('bulk up')).toContain('maxFat=10');
});

it('returns the right URL when trying to slim down', () => {
  expect(getUrl('slim down')).toContain('maxFat=5');
  expect(getUrl('slim down')).toContain('minCalories=0');
});