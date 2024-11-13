export {};

const userName = 'Bob';
const x = 10;
console.log(userName, x);
console.log(`Hey, ${userName}.`);

console.log(`name の型は ${typeof userName} です`);
console.log(`priority の型は ${typeof x} です`);

function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // 月は0から始まるため+1し、2桁に整形
    const day = ('0' + date.getDate()).slice(-2); // 2桁に整形
    const hours = ('0' + date.getHours()).slice(-2); // 2桁に整形
    const minutes = ('0' + date.getMinutes()).slice(-2); // 2桁に整形

    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

// const deadline: Date = new Date(2024, 10, 2, 11, 45);
// const deadline2: Date = new Date(2024, 10, 1, 11, 11);

// console.log(formatDate(deadline)); // 2024/11/02 11:45
// console.log(formatDate(deadline2)); // 2024/11/01 11:11

const todo = {
  name: "TypeScriptの勉強", // name = "..." ではない点に要注意
  priority: 3, // priority = "..." ではない点に要注意
};
console.log(`Todo 1 => ${todo.name}（優先度:${todo.priority})`);
console.log(todo);
console.log(JSON.stringify(todo, null, 2));

const get_age = (birth_day: Date): number => {
    const now = new Date();
    const birth_year = birth_day.getFullYear();
    const birth_month = birth_day.getMonth();
    const birth_date = birth_day.getDate();
    const now_year = now.getFullYear();
    const now_month = now.getMonth();
    const now_date = now.getDate();
    let age = now_year - birth_year;
    if (now_month < birth_month) {
        age--;
    } else if (now_month === birth_month && now_date < birth_date) {
        age--;
    }
    return age;
}

console.log(get_age(new Date(2005, 10, 9))); // 21

export {};
import dayjs from "dayjs"; // dayjsのインポート

const deadline: Date = new Date(2024, 10, 2, 11, 45);
const createdAt: Date = new Date(); // 引数なしで現在日時を取得

const str =
  `期限 ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}` +
  `(登録日 ${dayjs(createdAt).format("YYYY/MM/DD HH:mm")})`;
console.log(str);

// import dayjs from 'dayjs';

