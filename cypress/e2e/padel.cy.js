describe('Book a court', () => {
  
  it('Login', () => {
    cy.visit('http://www.bushytennispadel.ie/')
    cy.get(".BotonAccesoUsuario").click()
    
    const username = Cypress.env('PADEL_USER')
    const pwd = Cypress.env('PADEL_PWD')

    // check for envs to exist
    
    cy.get("input#ctl00_ContentPlaceHolderContenido_Login1_UserName").type(username)
    cy.get("input#ctl00_ContentPlaceHolderContenido_Login1_Password").type(pwd)
    cy.get("input[type=submit]").click()
  })
})