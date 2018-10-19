import { title } from '../../src/components/Hello/Hello'

describe('Test', () => {

  it('Should load the page', () => {
    cy.visit('/')
    cy.get('h1').should('have.id', title)
  })
})

