export interface EmployeeData {
  firstName: string;
  lastName: string;
  jobTitle: string;
}

export interface Employee extends EmployeeData {
  id: string;
  fullName: string;
  email: string;
}
