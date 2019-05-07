import 'cypress-testing-library/add-commands';

describe('Check home page' , () => {

    before( ()=> {
        cy.visit('http://localhost:3000/');
    })

    it('Check page title', () => {
        cy.contains('TRIVIA').should('exist');
    })

    it('Check default value of category', () => {
        cy.contains('Category').should('exist');
        cy.contains('General Knowledge').should('exist');
    })

    it('Check Difficulty buttons', () => {
        cy.contains('Difficulty').should('exist');
        cy.get('#difficulty-block').within(() =>{
            cy.contains('Easy').should('exist');
            cy.contains('Medium').should('exist');
            cy.contains('Hard').should('exist');
        })
    })

    it('Check the difficulty option', () => {
        cy.get('[type="radio"]').check('medium');

    })

    it('Check question mark', () => {
        cy.contains('?').should('exist');
    })

})