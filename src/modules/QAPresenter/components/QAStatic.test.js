import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import QAStatic from './QAStatic';

describe('QAStatic', () => {
  test('renders a question', () => {
    render(<QAStatic q={'question'} />);
    const p = screen.getByText(/question/i)
    expect(p).toBeInTheDocument();
  });

  test('renders an answer', () => {
    render(<QAStatic a={'answer'} answerDisplayed={true} />);
    const p = screen.getByText(/answer/i)
    expect(p).toBeInTheDocument();
  });

  test('does not render an answer', () => {
    render(<QAStatic a={'answer'} answerDisplayed={false} />);
    expect(() => getByText(/answer/i)).toThrow()
  });
})