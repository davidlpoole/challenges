import { describe, it } from "https://deno.land/std@0.208.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

import createEmployee from "./factory.ts";

describe("createEmployee", () => {
  it("should create an employee object with the correct full name", () => {
    const empData = {
      firstName: "John",
      lastName: "Doe",
      jobTitle: "Software Developer",
    };
    const domain = "example.com";
    const employee = createEmployee(empData, domain);

    assertEquals(employee.fullName, "John Doe");
  });

  it("should create an employee object with the correct email", () => {
    const empData = {
      firstName: "John",
      lastName: "Doe",
      jobTitle: "Software Developer",
    };
    const domain = "example.com";
    const employee = createEmployee(empData, domain);

    assertEquals(employee.email, "john.doe@example.com");
  });
});
