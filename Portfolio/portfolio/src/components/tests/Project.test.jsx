import { render, screen } from '@testing-library/react';
import Projects from '../Projects';
import { projects } from '../../utils/data';

describe('Projects Component', () => {
  it('renders project cards with correct links', () => {
    render(<Projects />);
    
    projects.forEach(project => {
      const link = screen.getByRole('link', { name: /view on github/i });
      expect(link).toHaveAttribute('href', project.githubUrl);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('displays project titles and descriptions', () => {
    render(<Projects />);
    
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });
});