let idCountMap = {};

export default function(prefix='id') {
    if (!idCountMap[prefix]) {
        idCountMap[prefix] = 0;
    }
    idCountMap[prefix]++;
    return `${prefix}${idCountMap[prefix]}`;
}