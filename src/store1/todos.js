import { makeAutoObservable } from 'mobx'

class Todos {
    data = [{name: 'Ali', age: 20, status: true, id: 1}, {name: 'Valijon', age: 15, status: false, id: 2}];
    constructor() {
        makeAutoObservable(this)
    }

    addTodo() {
        this.data.push({
            id: Date.now(),
            ...todos
        })
    }

    editTodo(id, updated) {
    const index = this.data.findIndex((e) => e.id == id);
      this.data[index] = { ...this.data[index], ...updated };
    }

    deleteTodo(id){
        this.data = this.data.filter((e) => e.id != id);
    }
    getById(id){
       return this.data?.find((e) => e.id == id)
    }
}
export const todos = new Todos();