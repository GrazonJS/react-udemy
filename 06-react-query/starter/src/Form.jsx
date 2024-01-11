import { useState } from "react";
import { useCreateData } from "./ReactQueryHooks";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { createTask, isLoading } = useCreateData();

  const handleSubmit = (e) => {
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName("");
      },
    });
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
