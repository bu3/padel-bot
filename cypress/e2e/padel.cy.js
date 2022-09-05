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


  it('Open Make Booking', () => {
    cy.get("#ctl00_ctl00_ContentPlaceHolderContenido_WUCMenuLateralIzquierdaIntranet_anchorreservas").click()
    nextDay()
    nextDay()
    nextDay()
    nextDay()

    bookingPageIsOpen()

    const existingBookings = []
    const foo = cy.get('svg > g[id^=event_]').each((event) => {
      expect(isBooking(event)).to.be.true
    })
  })

})


function bookingPageIsOpen() {
  cy.contains('Time table:')
}

function isBooking(event) {
  return event.attr('id').startsWith("event_")
}

function prevDay() {
  cy.get("input[type=button].ayer").click()
}

function nextDay() {
  cy.get("input[type=button].manyana").click()
}