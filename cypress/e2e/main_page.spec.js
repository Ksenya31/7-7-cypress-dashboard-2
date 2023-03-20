const selector = require("../fixtures/selectors.json");

describe("Should show correct display of the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should show correct title", () => {
    cy.get(selector.title).should("have.text", "Идёмвкино");
  });

  it("Should show correct weekday", () => {
    cy.get(selector.daysWeek).should("have.length", 7);
  });

  });
