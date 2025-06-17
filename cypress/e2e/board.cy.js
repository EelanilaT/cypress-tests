describe('Board Creation Test', () => {
  it('should create a new board successfully', () => {
    cy.visit('http://localhost:3000/');

    // Click 'Create new board' button 
    cy.contains(' Create new board ').click();

    // Input board name
    cy.get('#app > div > div > div > div > div.create-board > input').type('My Test Board');

    // Click 'Create board' button
    cy.contains('Create board').click();

    // Assert that the new board appears on the screen
    cy.contains('My Test Board').should('exist');
  });
    it('should not create a board with an empty name', () => {
        cy.visit('http://localhost:3000/');
    
        // Click 'Create new board' button 
        cy.contains(' Create new board ').click();
    
        // Click 'Create board' button without entering a name
        cy.contains('Create board').click();
    
    
    });

     it('should add two lists to the board successfully', () => {
    cy.visit('http://localhost:3000/');

    // Click on the board created earlier
    cy.contains('My Test Board').click();

    // First List
    cy.get('#app > div > div > div > div.inline-block.align-top > div > input').type('List 1');
    cy.contains('Add list').click();
    cy.wait(10000);

    // Second List
    cy.get('#app > div > div > div > div.inline-block.align-top > div > input').type('List 2');
    cy.contains('Add list').click();
    cy.wait(10000);

    

  });

  it('should delete List 1 from the board', () => {
  cy.visit('http://localhost:3000/');

  // Open the board
  cy.contains('My Test Board').click();
  cy.wait(10000);
  // Locate the action button for List 1
  cy.get('#app > div > div > div > div:nth-child(2) > div.inline-block.align-top.sortable-drag > div > div.flex.mb-1 > button > svg').click(); 
  

  // Click on Delete list
  cy.contains('Delete list').click();
  cy.wait(10000);
  
});
});
