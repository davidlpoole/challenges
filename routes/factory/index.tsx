import LinkButton from "../../components/LinkButton.tsx";
import Factory from "../../islands/factory/Factory.tsx";

export default function Home() {
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold pb-4">Factory Design Pattern</h1>
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Factory_method_pattern"
              target="_blank"
            >
              A factory function is a function which returns a new object. In
              JavaScript, any function can return an object. When it does so
              without the new keyword, it's a factory function.
            </a>
          </p>
          <p class="text-2xl pt-6">Example</p>
          <p class="mt-2">
            The following form passes the entered employee data to a factory
            function which creates a new Employee object, including derived
            properties like full name and email address.
          </p>
          <Factory />
        </div>
      </div>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center pb-6 gap-2">
          <LinkButton href="/">
            Home
          </LinkButton>
          <LinkButton
            href="https://github.com/davidlpoole/challenges/blob/main/utils/factory.ts"
            target="_blank"
          >
            <img
              class="inline-block mr-1 pb-1"
              src="/brand-github.svg"
              width="20"
              height="20"
              alt="the GitHub logo: OctoCat"
            />
            View full <strong>factory.ts</strong> on GitHub
          </LinkButton>
        </div>
        <div>
          <pre>
            <code class='text-gray-500'>
              {`export default function createEmployee(
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
}`}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
