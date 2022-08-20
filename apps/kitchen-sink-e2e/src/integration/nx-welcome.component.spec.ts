describe('kitchen-sink', () => {
    beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
    it('should render the component', () => {
        cy.get('d-nx-welcome').should('exist');
    });
});
