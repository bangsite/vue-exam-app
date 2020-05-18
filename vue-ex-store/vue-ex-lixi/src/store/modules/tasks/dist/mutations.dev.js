"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  getTask: function getTask(state, task) {
    state.newTask = task;
  },
  addTask: function addTask(state) {
    state.tasks.push({
      body: state.newTask,
      completed: false
    });
  },
  editTask: function editTask(state, task) {
    var tasks = state.tasks;
    tasks.splice(tasks.indexOf(task), 1);
    state.tasks = tasks;
    state.newTask = task.body;
  },
  removeTask: function removeTask(state, task) {
    var tasks = state.tasks;
    tasks.splice(tasks.indexOf(task), 1);
  },
  completeTask: function completeTask(state, task) {
    task.completed = !task.completed;
  },
  clearTask: function clearTask(state) {
    state.newTask = "";
  }
};
exports["default"] = _default;