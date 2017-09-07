export function arrToMap(arr) {
    return arr.reduce((acc, item) => ({
        ...acc,
        [item.id]: item
    }), {})
}

export function mapToArr(obj) {
    return Object.values(obj)
}