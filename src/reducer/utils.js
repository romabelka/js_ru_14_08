import {Map} from 'immutable'

export function arrToMap(arr, RecordModel = Map) {
    return arr.reduce((acc, item)=>({
        ...acc,
        [item.id]: new RecordModel(item)
    }), {})
}

export function mapToArr(obj) {
    return Object.values(obj)
}