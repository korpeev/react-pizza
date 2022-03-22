import {SortList, SortType} from "components/organisms/SortBlock/types";

export const sortList: SortList[] = [{
    id: 1,
    title: 'Популярности',
    type: SortType.POPULAR
},
{
    id: 2,
    title: 'Цене',
    type: SortType.PRICE
}
, {

    id: 3,
    title: 'Альфавиту',
    type: SortType.ALPHABET

}]