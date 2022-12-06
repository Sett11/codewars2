var filterString = function(value) {
    return Number(value.replace(/\D/g, ''))
  }
  console.log(filterString("aa1bb2cc3dd"))