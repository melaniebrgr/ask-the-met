import { compareByQuestion } from './compareByQuestion'

describe('compareByQuestion', () => {
  test('return -1 when first question is alphanumerically lesser than the second question', () => {
    const phraseA = { q: 'a' }
    const phraseB = { q: 'b' }
    expect(compareByQuestion(phraseA, phraseB)).toBe(-1)
  });

  test('return -1 when first question is alphanumerically lesser than the second question, insensitive of case', () => {
    const phraseA = { q: 'a' }
    const phraseB = { q: 'B' }
    expect(compareByQuestion(phraseA, phraseB)).toBe(-1)
  });

  test('return 1 when first question is alphanumerically greater than the second question', () => {
    const phraseA = { q: 'b' }
    const phraseB = { q: 'a' }
    expect(compareByQuestion(phraseA, phraseB)).toBe(1)
  });

  test('return 1 when first question is alphanumerically equal to the second question', () => {
    const phraseA = { q: 'a' }
    const phraseB = { q: 'a' }
    expect(compareByQuestion(phraseA, phraseB)).toBe(0)
  });
})
