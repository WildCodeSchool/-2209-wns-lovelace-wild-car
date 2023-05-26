import React from 'react';

<reference types="cypress" />;

describe("Ajout d'un trajet", () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.wait(3000);
    cy.visit('http://localhost:3000/');
  });

  it('Click sur le bouton et remplissage du formulaire', () => {
    cy.wait(600);
    cy.get('[data-cy=putTrajectButton]').click();
    cy.wait(600);
    cy.get('[data-cy=driverName]').type('Jean');
    cy.wait(600);
    cy.get('[data-cy=departureCity]').type('Lyon');
    cy.wait(600);
    cy.get('[data-cy=departureAdress]').type('3 rue dupont, 69003');
    cy.wait(600);
    cy.get('[data-cy=arrivalCity]').type('Marseille');
    cy.wait(600);
    cy.get('[data-cy=rideDate]').clear().type('2017-06-01T08:30');
    cy.wait(600);
    cy.get('[data-cy=maxPassagerNumber]').type(2);
    cy.wait(600);
    cy.get('[data-cy=smoker]').check();
    cy.wait(600);
    cy.get('[data-cy=pet]').check();
    cy.wait(600);
    cy.get('[data-cy=ridePrice]').type(25);
    cy.wait(600);
    cy.get('[data-cy=goButton]').click();
    cy.wait(600);
    cy.visit('http://localhost:3000/');
  });
});

describe('Tests backend', () => {
  it('Accède à localhost:4000', () => {
    cy.visit('http://localhost:4000');
    // Effectuez ici vos assertions ou vos actions supplémentaires sur la page
  });

  // Ajoutez d'autres tests selon vos besoins
});

// describe('Test de connexion à la base de données', () => {
//   it("Vérifie que l'application peut se connecter à la base de données", () => {
//     cy.request({
//       method: 'GET',
//       url: 'http://localhost:4000/',
//       headers: {
//         'X-CSRF-Token': 'valeur_CSRF_valide',
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//     });
//   });
// });

// describe('Clicker sur la je propose', () => {
//   it('Se rendre sur le site', () => {
//     it;
//   });
// });
