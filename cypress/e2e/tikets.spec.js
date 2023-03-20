const selectors = require("../fixtures/selectors.json");
const admin = require("../fixtures/admin.json");

it("Should find a hall that sells tickets", () => {
  cy.visit("/admin");
  cy.login(admin.validEmail, admin.validPassword);
  cy.contains(admin.deskForEqual).should("be.visible");
  cy.get(selectors.hallOpening).contains(selectors.nameHall);
  cy.visit("/");
  cy.get(selectors.chooseTimeSession).click();
  cy.get(selectors.chooseFilm).contains(selectors.timeSession).click();
  cy.contains(selectors.timeSessionForEqual).should("be.visible");
  cy.get(selectors.chooseChair).click();
  cy.get(selectors.pushButton).click();
  cy.contains("2/5").should("be.visible");
  cy.get(selectors.pushButton).should("be.visible");
});
