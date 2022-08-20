describe('kitchen-sink', () => {
    beforeEach(() =>
        cy.visit('/iframe.html?id=compareghusersstarscomponent--primary')
    );
    it('should render the component', () => {
        cy.get('d-compare-gh-users-stars').should('exist');
    });
});
