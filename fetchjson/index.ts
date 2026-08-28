import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let fruit = 'Apple';
console.log(fruit);

axios.get(url)
  .then(response => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  })
  .catch(error => {
    console.error(error);
});

const logTodo = (id : number, title: string, completed: boolean) => {
  console.log(`The todo with ID: ${id}`);
  console.log(`Has a title of : ${title}`);
  console.log(`Is it finished : ${completed}`);
};