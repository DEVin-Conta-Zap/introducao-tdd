import { render, screen } from '@testing-library/react';
import UserInfo from '../components/UserInfo';

describe('UserInfo', () => {
  it('render the user name', () => {
    const user = { name: 'Danilo Sales'};

    render(<UserInfo name={user.name} />);

    const element = screen.getByText(/danilo/i);
    expect(element).toBeInTheDocument();
  });
})