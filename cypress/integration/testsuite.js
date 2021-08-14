describe('automation for ALFATKG', () => {
    it('Go to respctive website', () => {

        cy.visit('http://automationpractice.com/index.php');
        let tittle = cy.title();
        console.log(tittle);

        cy.get('.logo').click()


    })
  })