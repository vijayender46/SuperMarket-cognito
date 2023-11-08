import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


const initialState = {
  headings: '12'
}

const mockStore = configureStore();
const SuperStore = mockStore(initialState)


test('renders learn react link', () => {
  render(
  <Provider store={SuperStore}>
    <App />
  </Provider>
  );
  const sectionTitle = screen.getByText(/Featured Products/i);
  expect(sectionTitle).toBeInTheDocument();
});


test('Render 12 products by default', async () => {
  render(
    <Provider store={SuperStore}>
      <App />
    </Provider>
    );

    const protitles = await screen.findAllByTestId('testTitles');
    expect(protitles).toHaveLength(12);
})

test('Render 8 product on Load More button click', async () => {
  render(
    <Provider store={SuperStore}>
      <App />
    </Provider>
    );

    const button = await screen.findByRole('button', {
      name: /load more/i
    });
    await userEvent.click(button);
    await waitFor(async () => {
      const protitles = await screen.findAllByTestId('testTitles');
      expect(protitles).toHaveLength(20);
    })
})