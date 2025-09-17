import { useDeletable } from "use-deletable";
import "./App.css";

function App() {
  const { deleteOpen, target, onOpenDelete, onCancelDelete } = useDeletable();

  const handleRemove = () => {
    // your implementation here

    onCancelDelete();
  };

  return (
    <div>
      <h1>Basic Demo</h1>
      <div className="card">
        {/* modal here */}
        {deleteOpen && (
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "1rem",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <h3>modal title</h3>
            <p>
              remove item <strong>{target}</strong>?
            </p>
            <div>
              <button onClick={onCancelDelete}>cancel</button>
              <button onClick={handleRemove}>remove</button>
            </div>
          </div>
        )}
        <button onClick={() => onOpenDelete("@me")}>remove item</button>
      </div>
    </div>
  );
}

export default App;
