export interface Wish{
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;

}

export interface NewWishData{
    title: string;
    summary: string;
    date: string;
}