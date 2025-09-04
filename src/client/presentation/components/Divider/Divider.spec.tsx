import { Divider } from "./Divider";
import { Box } from "@fastlooptech/layout-components";

it("Should render vertical according to parent prop", () => {
  cy.mount(
    <Box width={300} height={300}>
      <Divider data-test-id="divider" />
    </Box>
  );
  cy.get("[data-test-id='divider']").should("exist");
  cy.get("[data-test-id='divider']")
    .invoke("height")
    .then(height => {
      cy.get("[data-test-id='divider']")
        .parent()
        .invoke("height")
        .should("eq", height);
    });
});

it("Should render horizontal according to parent prop", () => {
  cy.mount(
    <Box width={300} height={300} column>
      <Divider data-test-id="divider" />
    </Box>
  );
  cy.get("[data-test-id='divider']").should("exist");
  cy.get("[data-test-id='divider']")
    .invoke("width")
    .then(width => {
      cy.get("[data-test-id='divider']")
        .parent()
        .invoke("width")
        .should("eq", width);
    });
});
