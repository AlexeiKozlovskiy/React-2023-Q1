describe('404 page', () => {
  it('should have "404 - Not Found"', () => {
    cy.visit('/aboutttttt');
    cy.contains('404 - Not Found').should('be.visible');
  });
});

describe('About page', () => {
  it('should have about page content', () => {
    cy.visit('/about');
    cy.contains(/Lorem/i).should('be.visible');
  });
});

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('empty input errors mesage', () => {
    cy.get('[data-testid="name-input"]').should('have.value', '');
    cy.get('[data-testid="price-input"]').should('have.value', '');

    cy.get('[data-testid="btn-submit"]').click();

    cy.contains('Please enter name').should('be.visible');
    cy.contains('Please enter price').should('be.visible');
    cy.contains('Please enter collectiond').should('be.visible');
    cy.contains('Please select color').should('be.visible');
    cy.contains('Please select available colors').should('be.visible');
    cy.contains('Please enter category').should('be.visible');
  });

  it('inputs success data, and clearing inputs', () => {
    cy.get('[data-testid="name-input"]').type('RubRod');
    cy.get('[data-testid="price-input"]').type('555');
    cy.get('[data-testid="collection-input"]').type('2023-04-04');
    cy.get('[data-testid="color-select-input"]').select('black');
    cy.get('[data-testid="color-checkbox-input-red"]').click();
    cy.get('[data-testid="category-input-tree-decorations"]').click();

    cy.get('[data-testid="btn-submit"]').click();

    cy.contains(/Data has been saved/i).should('be.visible');

    cy.get('[data-testid="name-input"]').should('have.value', '');
    cy.get('[data-testid="price-input"]').should('have.value', '');
  });
});

describe('Main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have "Nothing found..." text if nothing was found and clearing input search', () => {
    cy.get('.searchInput__input').should('have.value', '');
    cy.get('.searchInput__input').type('fffffffffffffff');

    cy.get('.searchInput__btn').click();

    cy.get('h1').should('include.text', 'Nothing found...');

    cy.get('.searchInput__cross').click();
    cy.get('.searchInput__input').should('have.value', '');
  });

  it('search some image', () => {
    cy.get('.searchInput__input').type('dog');

    cy.get('.searchInput__btn').click();

    cy.get('h1').should('have.text', 'You search: dog');
    cy.get('.searchInput__cross').click();
  });

  it('click image, should have modal content and close modal', () => {
    cy.get('.image').eq(0).click();
    cy.get('[data-testid="modal-load"]').contains('Load').should('be.visible');
    cy.get('[data-testid="modal-likes"]').contains('♥').should('be.visible');
    cy.get('[data-testid="modal-load_user"]').contains('Load user').should('be.visible');
    cy.get('[data-testid="modal-load_inst"]').contains('Load user inst').should('be.visible');
    cy.get('[data-testid="modal-size"]').contains('Size').should('be.visible');
    // cy.get('.modal__btn-save').click();
    cy.get('.modal__close').click();
    cy.get('.modal__wrapper').should('not.exist');
  });
});
