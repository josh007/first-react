// import { Form } from "./components/Form";
import { useState } from "react";
import { ExpenseList } from "./expense-tracker/components/ExpenseList";
import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
import { ExpenseForm } from "./expense-tracker/components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 3, category: "Groceries" },
    { id: 3, description: "ccc", amount: 90, category: "Utilities" },
    { id: 4, description: "ddd", amount: 1, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleList =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <div>
      {/* <Form></Form> */}

      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) => {
            console.log(expense);
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
          }}
        ></ExpenseForm>
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            console.log(category);
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList
        expenses={visibleList}
        onDelete={(id) => {
          console.log("delete", id);
          setExpenses(expenses.filter((expense) => expense.id !== id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
