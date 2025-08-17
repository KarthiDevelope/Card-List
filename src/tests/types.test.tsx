import { CardItem } from '../../src/types/types';
test('CardItem type', () => {
  const card: CardItem = { id: 1, title: 'Test', description: 'Test' };
  expect(card).toBeDefined();
});
