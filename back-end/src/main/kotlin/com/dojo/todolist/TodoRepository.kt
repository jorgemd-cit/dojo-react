package com.dojo.todolist

import org.springframework.data.mongodb.repository.MongoRepository

interface TodoRepository: MongoRepository<Todo, String>