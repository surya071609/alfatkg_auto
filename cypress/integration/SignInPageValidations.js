describe('automation for ALFATKG', () => {
    it('Go to respctive website', () => {
        cy.visit('http://automationpractice.com/index.php');
        let tittle = cy.title();
        console.log(tittle);
         cy.get('.logo').click()
    })
  })

  describe('Sign in Page with Valid Usename & Password', () => {
    it('Enters the credentials in Sign in Page', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      let username='surya0707@gmail.com'
      let password='surya1609'
      cy.get('#email').type(username)
      cy.get('#passwd').type(password).click()
      cy.get('#SubmitLogin > span').click()
      //let actualTitle=cy.title
     // let expectedTitle='Login - My Store'
      //assert.equal(expectedTitle,actualTitle, 'vals equal')
      //expect(expectedTitle).to.have.string(actualTitle)
    })
  })  
  
  describe('Sign in Page with InValid Usename & Password', () => {
    it('Enters the Invalid credentials in Sign in Page', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      let username='qwertysurya0707@gmail.com'
      let password='surya1609'
      cy.get('#email').type(username)
      cy.get('#passwd').type(password).click()
      cy.get('#SubmitLogin > span').click()
    })
  })  
  describe('Sign in Page with empty Usename & Password Fields', () => {
    it('Credentials Fields Left Blank in Sign in Page', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      cy.get('#SubmitLogin > span').click()
      cy.get('.lost_password > a')
    })
  })  
  describe('Validation of Forgot Password Link in Sign in Page', () => {
    it('Just clicking on the Forgot Password Link in Sign in Page', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      cy.get('.lost_password > a').click()
    })
  })  



  