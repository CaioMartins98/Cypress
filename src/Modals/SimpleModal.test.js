/* eslint-disable no-undef */
import React from "react";
import { mount } from "@cypress/react";
import SimpleModal from "./SimpleModal";

it("should open the modal when button is clicked", () => {
  mount(<SimpleModal />);
  cy.viewport(1080, 760);
  cy.get("button").click();

  cy.get("#name").should("be.visible").type("Caio Martins Dias");
  cy.get("#age").should("be.visible").type("23");
  cy.get("#cpf").should("be.visible").type("123.456.789-10");
  cy.get("#date").should("be.visible").type("17/01/1998");
  cy.get("#pass").should("be.visible").type("12345678");
  cy.get('button[type="submit"]').should("be.visible").click()
  cy.get('#success').should('be.visible')
  
});
