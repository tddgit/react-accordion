/// <reference types="cypress" />

it('should perform basic google search', () => {
    cy.visit('http://google.com');
    cy.get('[name="q"]').type('subscribe').type('{enter}');
});

describe('google search', () => {
    it('should work', () => {
        cy.visit('http://google.com');
        // cy.get('input').type('Hello world{enter}');
        cy.get('[title="Search"]').type(
            'Hello world{enter}',
        );
    });
});
