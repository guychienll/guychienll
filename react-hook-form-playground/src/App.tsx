import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import "./App.css";

type FormValues = {
  firstName: string;
  lastName: string;
};

function App() {
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  const [firstName, lastName] = useWatch({
    control: form.control,
    name: ["firstName", "lastName"],
  });

  const debouncedFullName = useDebounceValue(`${firstName}${lastName}`, 1000);

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">firstName</label>
          <input id="firstName" type="text" {...form.register("firstName")} />
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <input id="lastName" type="text" {...form.register("lastName")} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <FullName fullName={debouncedFullName} />
    </div>
  );
}

type FullNameProps = {
  fullName: string;
};

const FullName = React.memo(function FullName({ fullName }: FullNameProps) {
  return (
    <div className="derived-section">
      <div>FullName</div>
      <div>{fullName}</div>
    </div>
  );
});

function useDebounceValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, debouncedValue]);

  return debouncedValue;
}

export default App;
