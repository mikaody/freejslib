/* first method (traditional)
 ** make sort operation directly for the one array. It is not good for large array
 */

function sortTraditional(list) {
    const log = require('./log')
    const sortedList = list.sort()
    log('\n')
    log('*****START TRADITIONAL METHOD*****')
    log("before => " + list);
    log("after => " + sortedList);
    log('*****END TRADITIONAL METHOD*****')
    log('\n')
    return sortedList
}

module.exports = sortTraditional