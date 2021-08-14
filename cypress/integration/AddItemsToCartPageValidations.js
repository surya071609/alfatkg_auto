describe('Validation of Add to Cart Option For Signed in Valid User', () => {
    it('Clicking the Add toCart Button', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      let username='surya0707@gmail.com'
      let password='surya1609'
      cy.get('#email').type(username)
      cy.get('#passwd').type(password).click()
      cy.get('#SubmitLogin > span').click()
     
      cy.get('.icon-home').click()

      // Clicking on Dress Add to Cart Button
      cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

    })
  })  

  describe('Validation of Proceed To Checkout Button in Pop Up Window', () => {
    it('Clicking the Proceed To Checkout Button', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      let username='surya0707@gmail.com'
      let password='surya1609'
      cy.get('#email').type(username)
      cy.get('#passwd').type(password).click()
      cy.get('#SubmitLogin > span').click()
      cy.get('.icon-home').click()
      // Clicking on Dress Add to Cart Button
      cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
      // Clicking on Proceed to Checkout Option in Pop up Window
      cy.get('.button-medium > span').click()
          })  
        })  
          describe('Validation of Proceed To Checkout Button in Cart Summary Page', () => {
            it('Clicking the Proceed To Checkout Button in cart Summary Page', () => {
              cy.visit('http://automationpractice.com/index.php')
              cy.get('.login').click()
              let username='surya0707@gmail.com'
              let password='surya1609'
              cy.get('#email').type(username)
              cy.get('#passwd').type(password).click()
              cy.get('#SubmitLogin > span').click()
              cy.get('.icon-home').click()
              // Clicking on Dress Add to Cart Button
              cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
              // Clicking on Proceed to Checkout Option in Pop up Window
              cy.get('.button-medium > span').click()
              // Clicking on Proceed to Checkout Option in Cart Summary page
              cy.get('.cart_navigation > .button > span').click()
            })
          })  

          describe('Validation of Proceed To Checkout Button in Cart  Address Summary Page', () => {
            it('Clicking the Proceed To Checkout Button in cart Address Summary Page', () => {
              cy.visit('http://automationpractice.com/index.php')
              cy.get('.login').click()
              let username='surya0707@gmail.com'
              let password='surya1609'
              cy.get('#email').type(username)
              cy.get('#passwd').type(password).click()
              cy.get('#SubmitLogin > span').click()
              cy.get('.icon-home').click()
              // Clicking on Dress Add to Cart Button
              cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
              // Clicking on Proceed to Checkout Option in Pop up Window
              cy.get('.button-medium > span').click()
              // Clicking on Proceed to Checkout Option in Cart Summary page
              cy.get('.cart_navigation > .button > span').click()
              // Clicking again in Address tab for Proceed To Checkou Button
              cy.get('.cart_navigation > .button > span').click()
            })
          })  

          describe('Validation of Proceed To Checkout Button in Cart Shipping Summary Page', () => {
            it('Clicking the Proceed To Checkout Button in cart Shipping Summary Page', () => {
              cy.visit('http://automationpractice.com/index.php')
              cy.get('.login').click()
              let username='surya0707@gmail.com'
              let password='surya1609'
              cy.get('#email').type(username)
              cy.get('#passwd').type(password).click()
              cy.get('#SubmitLogin > span').click()
              cy.get('.icon-home').click()
              // Clicking on Dress Add to Cart Button
              cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
              // Clicking on Proceed to Checkout Option in Pop up Window
              cy.get('.button-medium > span').click()
              // Clicking on Proceed to Checkout Option in Cart Summary page
              cy.get('.cart_navigation > .button > span').click()
              // Clicking again in Address tab for Proceed To Checkou Button
              cy.get('.cart_navigation > .button > span').click()
              // Check box clicking accepting agreement in Shiipping Tab
              cy.get('#cgv').click()
              // Clicking again in Proceed To Checkout Button in Shipping Tab
              cy.get('.cart_navigation > .button > span').click()
            })
          })  

    

 
  



