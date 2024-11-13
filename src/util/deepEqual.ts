import { Todo } from '../types';

export const deepEqual = (a: Todo, b: Todo): boolean => {
    return (
        a.name === b.name &&
        a.priority === b.priority &&
        a.isDone === b.isDone &&
        a.deadline.getTime() === b.deadline.getTime()
    );
};