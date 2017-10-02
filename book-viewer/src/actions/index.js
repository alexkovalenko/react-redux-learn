import ActionType from './action_type';

export function selectBook(book) {
    return {
        type: ActionType.SELECT_BOOK,
        book: book
    }
}