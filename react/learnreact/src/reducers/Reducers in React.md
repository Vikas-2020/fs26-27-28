# Understanding Reducers in React

Components with many state updates spread across multiple event handlers can become overwhelming. To simplify and consolidate state update logic, you can use a **Reducer**.

## Example: TaskApp Component

The `TaskApp` component below holds an array of tasks in state and uses three different event handlers to add, remove, and edit tasks:

```javascript
const [tasks, setTasks] = useState(initialTasks);

function handleAddTask(text) {
  setTasks([
    ...tasks,
    {
      id: nextId++,
      text: text,
      done: false,
    },
  ]);
}

function handleChangeTask(task) {
  setTasks(
    tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    })
  );
}

function handleDeleteTask(taskId) {
  setTasks(tasks.filter((t) => t.id !== taskId));
}
```

Each event handler calls `setTasks` to update the state. As the component grows, the state logic becomes scattered and harder to manage.

## Solution: Using a Reducer

Reducers provide a centralized way to handle state updates. You can migrate from `useState` to `useReducer` in three steps:

### Step 1: Move from Setting State to Dispatching Actions

Replace state-setting logic with action dispatching. For example:

```javascript
function handleAddTask(text) {
  dispatch({
    type: "added",
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: "changed",
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: "deleted",
    id: taskId,
  });
}
```

The object passed to `dispatch` is called an **Action**.

### Step 2: Write a Reducer Function

A reducer function consolidates state logic. It takes two arguments:

1. **Current State**: The current state of the component.
2. **Action Object**: The action dispatched by the event handler.

The reducer returns the next state, which React sets automatically.

#### Example Reducer Function

```javascript
function tasksReducer(tasks, action) {
  if (action.type === "added") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === "changed") {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === "deleted") {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
```

#### Use a Switch Statement for Readability

Switch statements are a convention in reducers and improve readability:

```javascript
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
```

By using reducers, you centralize state logic, making your code easier to read and maintain.

### Step 3: Use the Reducer in Your Component

Finally, you need to hook up the `tasksReducer` to your component. Import the `useReducer` Hook from React:

```javascript
import { useReducer } from 'react';
```

Then replace `useState` with `useReducer` like so:

```javascript
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```

### Full Example Code

Here is the complete example:

```javascript
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague Itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
```