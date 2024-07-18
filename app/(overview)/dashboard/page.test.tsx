import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

test('Testing', () => {
  render(<Page />)
  expect(screen.getByText('Dashboard')).toString()
})
