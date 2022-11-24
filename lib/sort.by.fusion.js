function sortByFusion(list) {
    const log = require('./log')

    let listFinal = []
    /* second method (sort by fusion)
     ** split into two arrays and make sorting operation for every array. It is good for large array
     */
    log('\n')
    log('*****START SORT BY FUSION METHOD*****')
    log("before => " + list)

    for (let i = 0; i <= (list.length - 1) / 2; i++) {
        listFinal.push(list[i])
        listFinal = listFinal.sort()
    }

    for (let i = (list.length) / 2; i <= list.length - 1; i++) {
        listFinal.push(list[i])
        listFinal = listFinal.sort()
    }
    log(`after => ${listFinal}`)
    log('*****END SORT BY FUSION METHOD*****')
    log('\n')
    return listFinal //['a','c','v','z']
}

module.exports = sortByFusion