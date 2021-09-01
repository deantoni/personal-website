/// <reference types="cypress" />

describe("Navigation", () => {
  context("Desktop", () => {
    beforeEach(() => {
      cy.viewport("macbook-15");
    });
    context("Branding", () => {
      it("should take you to the home page", () => {
        cy.visit("/");
        cy.get("nav.desktop a.branding").click();
        cy.path().should("eq", "/");

        cy.visit("/posts");
        cy.get("nav.desktop a.branding").click();
        cy.path().should("eq", "/");

        cy.visit("/resume");
        cy.get("nav.desktop a.branding").click();
        cy.path().should("eq", "/");
      });
    });
    context("Menu links", () => {
      it("should contain links to all pages", () => {
        cy.visit("/");
        cy.get("nav.desktop a[title=Home]").should("exist");
        cy.get("nav.desktop a[title=Posts]").should("exist");
        cy.get("nav.desktop a[title=Projects]").should("exist");
        cy.get("nav.desktop a[title=Resume]").should("exist");
      });
      it("should take you to the posts page", () => {
        cy.visit("/");
        cy.get("nav.desktop a[title=Posts]").click();
        cy.path().should("match", /\/posts\/?/);
      });
      it("should take you to the projects page", () => {
        cy.visit("/");
        cy.get("nav.desktop a[title=Projects]").click();
        cy.path().should("match", /\/projects\/?/);
      });
      it("should take you to the resume page", () => {
        cy.visit("/");
        cy.get("nav.desktop a[title=Resume]").click();
        cy.path().should("match", /\/resume\/?/);
      });
      it("should take you back to the home page", () => {
        cy.visit("/posts");
        cy.get("nav.desktop a[title=Home]").click();
        cy.path().should("match", /\//);
      });
      it("should show which page is active", () => {
        cy.visit("/");
        cy.get("nav.desktop a.active").should("have.length", "1");
        cy.get("nav.desktop a[title=Home]").should("have.class", "active");

        cy.visit("/posts");
        cy.get("nav.desktop a.active").should("have.length", "1");
        cy.get("nav.desktop a[title=Posts]").should("have.class", "active");

        cy.visit("/projects");
        cy.get("nav.desktop a.active").should("have.length", "1");
        cy.get("nav.desktop a[title=Projects]").should("have.class", "active");

        cy.visit("/resume");
        cy.get("nav.desktop a.active").should("have.length", "1");
        cy.get("nav.desktop a[title=Resume]").should("have.class", "active");
      });
    });
  });
});
