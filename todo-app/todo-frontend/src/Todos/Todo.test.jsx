import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { expect } from 'vitest'

// This is probably always gonna pass but anyways...
test('renders content', () => {
  const todo = {
    text: "Increase the number of tools in my tool belt",
    done: false
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('Increase the number of tools in my tool belt')
  expect(element).toBeDefined()
})
