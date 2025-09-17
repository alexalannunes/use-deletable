# use-deletable

A simple React hook to manage item deletion confirmation.

## Problem

Every time I needed to remove an item with confirmation, I had to create two separate states:

- One to handle the modal open/close state.
- Another to keep track of which item was being deleted.

This repetition was tedious and error-prone.

## Solution

`use-deletable` encapsulates this logic into a single hook.
You no longer need to manually manage two states every time you implement a delete confirmation.

## Installation

```bash
npm install use-selectable
```

or with Yarn:

```bash
yarn add use-selectable
```

## Usage

```tsx
import { useDeletable } from "use-deletable";

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
        <button onClick={() => onOpenDelete("@me")}>remove item?</button>
      </div>
    </div>
  );
}

export default App;
```

## API

The hook returns:

- deleteOpen – boolean indicating if the modal should be open.
- target – the item currently marked for deletion.
- onOpenDelete(target: T) – call this to open the modal and set the item.
- onCancelDelete() – call this to close the modal and clear the item.
