Array.prototype.remove_ = (integer_list, values_list) => integer_list.filter(el => !values_list.includes(el))
console.log(remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]))