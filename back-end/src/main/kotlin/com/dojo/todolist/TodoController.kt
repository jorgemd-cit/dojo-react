package com.dojo.todolist

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("api/todos")
class TodoController(val todoRepository: TodoRepository) {

    @PostMapping("/create")
    fun create(@RequestBody(required = true) todo: Todo) = ResponseEntity.ok(todoRepository.save(todo))

    @GetMapping()
    fun get() = ResponseEntity.ok(todoRepository.findAll())

    @PutMapping("/update/{id}")
    fun update(
        @PathVariable("id") id: String,
        @RequestParam("completed", required = true) completed: Boolean
    ): ResponseEntity<Todo> {
        val todo = todoRepository.findById(id).orElseThrow { RuntimeException("Todo $id not found!") }

        val updatedTodo = Todo(
            todo.id,
            todo.title,
            completed = completed
        )

        return ResponseEntity.ok(todoRepository.save(updatedTodo))
    }

    @DeleteMapping("/delete/{id}")
    fun delete(@PathVariable("id") id: String) = ResponseEntity.ok(todoRepository.deleteById(id))
}
