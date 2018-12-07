export interface ItemsListInterface<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<T>;
}
