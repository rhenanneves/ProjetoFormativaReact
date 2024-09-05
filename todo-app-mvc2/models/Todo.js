import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false, // Define como falso se a descrição não for obrigatória
  },
  projectDescription: {
    type: String,
    required: false, // Define como falso se a descrição do projeto não for obrigatória
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
