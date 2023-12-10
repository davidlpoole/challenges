import { Employee, EmployeeData } from "../islands/NewEmployee.tsx";

/**
 * Creates a new employee object with the given employee data and domain.
 *
 * @param {EmployeeData} emp - The data for the new employee.
 * @param {string} domain - The domain for the employee's email.
 * @return {Employee} - The newly created employee object.
 */
export default function createEmployee(
  emp: EmployeeData,
  domain: string,
): Employee {
  const id = generateEmployeeId();
  const fullName = generateFullName(emp);
  const email = generateEmail(emp, domain);

  return {
    id,
    ...emp,
    fullName,
    email,
  };
}

/**
 * Generates a random employee ID.
 *
 * @return {string} The generated employee ID.
 */
function generateEmployeeId(): string {
  return `0x${Math.random().toString(16).slice(2)}`;
}

/**
 * Generates the full name of an employee.
 *
 * @param {EmployeeData} emp - The employee data object.
 * @return {string} The full name of the employee.
 */
function generateFullName(emp: EmployeeData): string {
  return `${emp.firstName} ${emp.lastName}`;
}

/**
 * Generates an email address for an employee.
 *
 * @param {EmployeeData} emp - The employee data containing the first name and last name.
 * @param {string} domain - The domain for the email address.
 * @return {string} The generated email address.
 */
function generateEmail(emp: EmployeeData, domain: string): string {
  const firstName = emp.firstName.toLowerCase();
  const lastName = emp.lastName.toLowerCase();
  return `${firstName}.${lastName}@${domain}`;
}
