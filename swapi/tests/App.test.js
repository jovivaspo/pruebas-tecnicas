import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import data from '../src/data.json'

describe('Test in App', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'))
  test('should show a list of characters from the API', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data
    })
    render(<App/>)
    expect(window.fetch).toHaveBeenCalled(1)
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.dev/api/people/')
    expect(screen.getAllByText('Luke Skywalker').toBeInTheDocument())
  })
})
