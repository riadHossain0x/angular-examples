import { TodoEntity } from "./TodoEntity";

export class TodoStorage {
    private items: any;
    private storage: string;
    constructor() {
        this.storage = "todo.bak";
    }

    SaveItem(todos: TodoEntity[]): void {
        localStorage.setItem(this.storage, JSON.stringify(todos));
    }
    GetItem(): TodoEntity[] {
        let jsonItem: any = localStorage.getItem(this.storage);
        if (jsonItem != null) {
            this.items = JSON.parse(jsonItem)
        }
        else {
            this.items = [];
        }

        return this.items;
    }
}