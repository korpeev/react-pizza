import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { FC, useState} from "react";
import {Props, SortList} from "components/organisms/SortBlock/types";
import {sortList} from "components/organisms/SortBlock/props.mock";

export const SortBlock: FC<Props> = ({sortList}) => {
    const [sortType, setSortType] = useState<SortList | undefined>(sortList?.[0])

    const onChangeSortType = (sortTypeObject: SortList) => {
        return () => setSortType(sortTypeObject)
    }

    return <FormControl variant="filled" sx={{width: '180px'}}>
        <InputLabel id='demo-simple-select-label' sx={{mr: 2}}>Сортировка по</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType?.title}
            label="Age"
        >
            {sortList?.map(l => (<MenuItem onClick={onChangeSortType(l)} key={l.id} value={l.title}>{l.title}</MenuItem>))}
        </Select>
    </FormControl>
}

SortBlock.defaultProps = {
    sortList,
}