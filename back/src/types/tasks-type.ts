export interface Task {
  lineId: string;
  lineDisplayId: string;
  tasks: TaskInfo[];
}

export interface TaskInfo {
  taskID: string;
  type: string;
}
