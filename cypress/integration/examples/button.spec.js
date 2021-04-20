/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:6006/?path=/story/primary-button--primary");
  });

  const getIframeDocument = () =>
    cy
      .get("#storybook-preview-iframe")
      .its("0.contentDocument")
      .should("exist");

  const getIframeBody = () =>
    getIframeDocument().its("body").should("not.be.undefined").then(cy.wrap);

  it("sample button test", () => {
    getIframeBody().find("#primary-button").contains("Primary Button");
  });
});
