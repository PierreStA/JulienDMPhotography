describe('Connexion', () => {
  it("devrait se connecter avec succès en utilisant des identifiants valides", () => {
    cy.visit('http://localhost:3000/login'); 

  
    cy.get('#email').type('thomas@hotmail.fr');
    cy.get('#password').type('123456789.');
    cy.get('form').submit();

    cy.url().should('eq', 'http://localhost:3000/'); 

    cy.visit('http://localhost:3000/contact'); 

     cy.url().should('eq', 'http://localhost:3000/contact');  //*si la connexion est valide, l'utilisateur a accès à la page contact
  });

  it("devrait bloquer l'identification siles identifiants sont invalides", () => {
    cy.visit('http://localhost:3000/login'); 

   
    cy.get('#email').type('wrong-email@hotmail.com ');
    cy.get('#password').type('mot-de-passe-incorrect');

    cy.get('form').submit();

     cy.url().should('eq', 'http://localhost:3000/login'); //*si la connexion est pas redirigé vers la page d'accueil
  });
});
