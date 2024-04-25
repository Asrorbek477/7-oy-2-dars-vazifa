import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/todosSlice";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [text, setText]
  const { todos } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  return (
    <div>
    <h1>Todos</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" />
    </form>
    </div>
    );
}

export default App;