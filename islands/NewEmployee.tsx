import { h } from "https://esm.sh/preact@10.19.2";
import type { Signal } from "@preact/signals";

import { Button } from "../components/Button.tsx";
import FormInput from "../components/FormInput.tsx";

import createEmployee from "../utils/factory.ts";
import { Employee, EmployeeData } from "../types/Employee.ts";

interface NewEmployeeProps {
  employees: Signal<Employee[]>;
}

export default function NewEmployee(props: NewEmployeeProps) {
  function handleSubmit(e: h.JSX.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const emp: EmployeeData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      jobTitle: formData.get("jobTitle") as string,
    };
    const employee = createEmployee(emp, "example.com");

    props.employees.value = [...props.employees.value, employee];
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <form class="flex gap-2 py-6 flex-wrap" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="firstName"
          placeholder="First name"
        />
        <FormInput
          name="lastName"
          placeholder="Last name"
        />
        <FormInput
          name="jobTitle"
          placeholder="Job title"
        />
        <Button>Add</Button>
      </form>
    </>
  );
}
