import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        onSelectCategory(event.target.value);
      }}
    >
      <option value="All" className="">
        All Categories
      </option>
      {categories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
};
