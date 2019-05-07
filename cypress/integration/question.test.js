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
        cy.get('#0').click();
        // cy.get('#background').should('have.css','color','rgb(0, 0, 0)') //checking background color
    })

})