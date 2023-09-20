import { createBrowserRouter } from "react-router-dom";
import ToDoList from "./components/TodoList";


const router = createBrowserRouter([
  {
    path:"/",
    element:<ToDoList/>,
  }
])

export default router;