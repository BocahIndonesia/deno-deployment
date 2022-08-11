import todos from "../stubs/todos.ts"
import { Response } from "https://deno.land/x/oak@v10.6.0/mod.ts"

export default {
    getAllTodos: ({response}:{response:Response}) => {
      response.status= 200
      response.body= {
        success: true,
        data: todos
      }
    },
    createTodo: async () => {},
    getTodoById: () => {},
    updateTodoById: async () => {},
    deleteTodoById: () => {},
  };