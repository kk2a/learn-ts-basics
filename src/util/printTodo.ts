import dayjs from "dayjs";
import { Todo } from "../types";

export const printTodo = (todo: Todo): void => {
  const todoSummary =
    `(優先度: ${todo.priority}) ${todo.name}` +
    ` 期日: ${dayjs(todo.deadline).format("YYYY/MM/DD HH:mm")}`;
  console.log(todoSummary);
};

const date = dayjs('2024-11-13');
const dayOfWeek = date.day(); // 0: 日曜日, 1: 月曜日, ..., 6: 土曜日

const daysOfWeek = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
const dayOfWeekString = daysOfWeek[dayOfWeek];

console.log(dayOfWeekString); // 土曜日