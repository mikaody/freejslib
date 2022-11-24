//împort modules
const log = require('./lib/log')
const sortByFusion = require('./lib/sort.by.fusion')
const sortTraditional = require('./lib/sort.traditional')

//initializing a array list
const list = ["calcium", "carbon", "amidon", "vitamine", "chlore", "sodium"]

//usage of method applying to sort the array list
sortTraditional(list)
sortByFusion(list)

//we got the same result for both method sort by traditional and sort by fusion
//by the way, sort by fusion is optimized method