function getQuotes(s) {
    return s.match(/"([^"])+"/g)
}

console.log(getQuotes('"Winners never quit and quitters never win." - Vince Lombardi, "My motto is, \'Never quit.\'" - Henry Rollins'))