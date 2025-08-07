import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card Component', () => {
  it('renders card with title and description', () => {
    const testTitle = 'Test Title';
    const testDescription = 'Test Description';
    
    render(<Card title={testTitle} description={testDescription} />);
    
    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(testDescription)).toBeInTheDocument();
  });
});