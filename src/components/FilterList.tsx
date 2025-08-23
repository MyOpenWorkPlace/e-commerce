import { Field } from "formik";

function FilterList({ name, list }: { name: string; list: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 gap-y-6 py-5">
      {list.map((el, i) => {
        return (
          <li key={i}>
            <Field
              name={name}
              className="peer hidden"
              value={el}
              type="checkbox"
              id={el}
            />
            <label
              htmlFor={el}
              className="peer-checked:bg-black  peer-checked:text-white p-3 rounded-full bg-gray-200"
            >
              {el}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default FilterList;
