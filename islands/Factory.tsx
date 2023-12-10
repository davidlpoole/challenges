import { useSignal } from "@preact/signals";
import NewEmployee from "./NewEmployee.tsx";
import { Employee } from "../types/Employee.ts";

export default function Factory() {
  const employees = useSignal([] as Employee[]);
  return (
    <>
      <NewEmployee employees={employees} />
      <ul>
        {employees.value.map((emp) => (
          <li key={emp.id}>
            {emp.firstName} {emp.lastName} - {emp.jobTitle} ({emp.email})
          </li>
        ))}
      </ul>
    </>
  );
}
