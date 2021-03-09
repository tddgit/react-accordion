/// <reference types="cypress" />

describe('Login', () => {
    it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#login');
        cy.title().should('eq', 'Conduit');
        cy.location('protocol').should('not.be', 'https');
        // cy.get('input[type="email"]').type('qamilestone.academy@gmail.com');
        // cy.get('input[type="password"]').type('admin123');
        // cy.get('.btn').contains('Sign in').should('be.visible').click();
        // cy.contains('Your feed', { timeout: 10000 }).should('be.visible');
    });

    it('Create a post', function () {
        // cy.contains('New Post').click();
        cy.get('ul.navbar-nav')
            .cy.hash()
            .should('include', '#/editor');
        cy.location('hash').should('include', '#/editor');
        cy.get('input[placeholder="Article Title"]').type(
            'Test',
        );
        cy.get(
            'input[placeholder="What\'s this article about?"]]',
        ).type('Test 1');
        cy.get(
            'textarea[placeholder="Write your article (in markdown)"]',
        ).type('Test 2');
        cy.contains('Publish Article').click();
        cy.url().should('include', 'article');
    });

    it('Mark-unmark as favorite', function () {
        cy.get('.nav-link').contains('QAMs').click();
        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart').click();
        cy.contains('Favorite Articles').click();
        cy.url().should('include', 'favorites');
        cy.get('.ion-heart').click();
        cy.reload();
        cy.contains('No articles are here... yet.');
        cy.go('back');
        // cy.go(-1)
        // cy.go('forward');
        // cy.go(1)
    });
});

// describe('Basic Tests', () => {
// 	it('test one', () => {
// 		// cy.visit('http://codedamn.com');
// 		// // cy.contains('Sign In').click();
// 		// // cy.get('[data-testid=username]').type('iosdev')
// 		// // cy.get('[data-testid=password').type('iosdev')
// 		// // cy.get('[data-testid="login")]').click()
// 		// // cy.get('div[id=root]').should('exist');
// 		// // cy.get('div#noroot').should('not.exist');
// 		// // cy.contains('Start Learning Free');
// 		// // cy.get('.asyncComponent > div > a');
// 		// // cy.get('[data-testid=menutoggle]');
// 		// cy.viewport('iphone-x')
//
//         it('Every basic element exists', () => {
//             cy.viewport(1280, 720)
//             cy.visit('http://codedamn.com')
//
//
//         })
//
//         it('Login page looks good')
//
//         // it('Every basic element exists', () => {
//         //     // cy.viewport('iphone-x')
//         //     cy.visit('https://codedamn.com')
//         // })
//
//
//
// 	});
// });
