import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be atelast 3 characters long" }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be greater than 18" }),
});

type FormData = z.infer<typeof schema>;

export const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   let person = {
  //     name: "",
  //     age: 0,
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(register("name"));
  //console.log(formState.errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     person.name = nameRef.current?.value;
  //     person.age = parseInt(ageRef.current.value);

  //     console.log("Submitted", person);
  //   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label"></label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};
