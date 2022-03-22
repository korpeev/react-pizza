export enum SortType {
    PRICE = 'price',
    POPULAR = 'popular',
    ALPHABET = 'abc'
}

export type SortList = {
    id: number,
    title: string;
    type: SortType
}

export type Props = {
    sortList?: SortList[]
}