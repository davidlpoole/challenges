import { useSignal } from "@preact/signals";
import NewEmployee from "../merge/NewEmployee.tsx";
import { Employee } from "../../types/Employee.ts";

export default function Factory() {
  const employees = useSignal([] as Employee[]);
  return (
    <>
      <NewEmployee employees={employees} />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        {employees.value.map((emp) => (
          <div
            key={emp.id}
            class="break-before-all bg-white rounded p-2 shadow-md"
          >
            {Object.entries(emp).map(([key, value]) => (
              <div class="overflow-scroll">
                <span class="font-semibold">{key}:</span> {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
