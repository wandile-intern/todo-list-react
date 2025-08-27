import { useState } from "react";

export default function TaskItem({ task, index, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditSave = () => {
    if (editText.trim() === "") return;
    onEdit(index, editText);
    setIsEditing(false);
  };

  return (
    <li style={{ margin: "10px 0" }}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditSave}
          onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
          autoFocus
        />
      ) : (
        <span
          onClick={() => onToggle(index)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          {task.text}
        </span>
      )}

      <button onClick={() => setIsEditing(true)}>✏️</button>
      <button onClick={() => onDelete(index)}>❌</button>
    </li>
  );
}
