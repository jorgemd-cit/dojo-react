package com.dojo.todolist

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "todos")
data class Todo (
    @Id
    val id: String?,

    val title: String,

    val completed: Boolean
)
