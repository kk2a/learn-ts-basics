export const get_age = (birth_day: Date): number => {
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