import React from "react";
import AboutMe from "./AboutMe";

describe("<AboutMe />", () => {
  it("checks the render of AboutMe", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutMe />);
    cy.get("section").should("contain", "All information you need to know");
  });

  it("checks the integration of AboutList component", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutMe />);

    cy.get("li").should(
      "contain",
      "What's your name and background as a photographer ?"
    );
    cy.get("button")
      .contains("What's your name and background as a photographer ?")
      .click();
    cy.get("p").should("contain", "Hello, I'm Julien Da Motta");
  });
});
