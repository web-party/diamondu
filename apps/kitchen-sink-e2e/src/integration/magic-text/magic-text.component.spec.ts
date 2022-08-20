describe('kitchen-sink', () => {
    beforeEach(() => cy.visit('/iframe.html?id=magictextcomponent--primary'));
    it('should render the component', () => {
        cy.get('d-magic-text').should('exist');
    });
});
