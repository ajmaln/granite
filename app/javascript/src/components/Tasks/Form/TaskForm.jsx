import React from "react";

import Button from "components/Button";
import Input from "components/Input";

const TaskForm = ({
  type = "create",
  title,
  setTitle,
  loading,
  handleSubmit
}) => {
  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <Input
        label="Title"
        placeholder="Todo Title (Max 50 Characters Allowed)"
        value={title}
        onChange={e => setTitle(e.target.value.slice(0, 50))}
      />
      <Button
        type="submit"
        buttonText={type === "create" ? "Create Task" : "Update Task"}
        loading={loading}
      />
    </form>
  );
};

export default TaskForm;
