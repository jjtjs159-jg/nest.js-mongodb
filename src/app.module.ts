import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Todo, TodoSchema } from "./todo/schemas/todo.schema";
import { TodoController } from "./todo/todo.controller";
import { TodoService } from "./todo/todo.service";

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
})
export class AppModule {}
