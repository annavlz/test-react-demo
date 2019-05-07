import 'cypress-testing-library/add-commands';

describe('Check question' , () => {

    before( ()=> {
        cy.server();
        cy.route({
            method: 'GET',
            url:'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy',
            response: 'fixture:GKquestions.json'
        });
        cy.visit('http://localhost:3000/');
    })

    it('Check question answers are correct', () => {
        cy.contains('?').click();
        cy.contains('LILY').should('exist');
        cy.contains('SUNFLOWER').should('exist');
        cy.getByLabelText('ROSE').should('exist');
        cy.get('[type="button]').first().click()

        //choose a wrong answer
        cy.contains('ROSE').click();
        cy.get('#root').should('have.css','color','rgb(255,0,0)') //red color for wrong answer

        //choose a correct answer
        cy.contains('LILY').click();
        cy.get('#root').should('have.css','color','rgb(0,128,0)') //green color for correct answer
    })

})