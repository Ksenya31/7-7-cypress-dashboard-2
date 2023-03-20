const admin = require("../fixtures/admin.json");
const selectors = require("../fixtures/selectors.json");

describe("Admin login", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("Should correct email and password", () => {
    cy.login(admin.validEmail, admin.validPassword);
    cy.contains(admin.deskForEqual).should("be.visible");
  });

  it("Should incorrect email and password", () => {
    cy.login(admin.invalidEmail, admin.invalidPassword);
    cy.contains(admin.errorForEqual).should("be.visible");
  });

  it("Should invalid email", () => {
    cy.visit("/admin/");
    cy.login(admin.invalidEmail, admin.validPassword);
    cy.contains("Ошибка авторизации!");
  });
  it("Should empty email", () => {
    cy.visit("/admin/");
    cy.login(" ", admin.validPassword);
    cy.get(selectors.email)
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  it("Should empty password", () => {
    cy.visit("/admin/");
    cy.login(admin.validEmail, " ");
    cy.contains("Ошибка авторизации!");
  });
});
