import Todo from "@/models/Todo";
import closeConnectionMongo from "@/utils/dbCloseConnection";
import connectMongo from "@/utils/dbConnect";

//CRUD 
export const getTodos = async() => {
    await connectMongo();
    return await Todo.findById({}) && 
    await closeConnectionMongo();
}

export const createTodo = async(data) => {
await connectMongo();
return await Todo.create(data) && await closeConnectionMongo();
}


export const updateTodo = async (id, data) => {
    await connectMongo();
    return await Todo.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  };

  export const deleteTodo = async (id) => {
    await connectMongo();
    return await Todo.deleteOne({ _id: id });
  };
