function leo(oscar){
    return oscar === 88 ? "Leo finally won the oscar! Leo is happy":
    oscar === 86 ? "Not even for Wolf of wallstreet?!":
    oscar !== 88 && oscar !== 86 && oscar < 88 ? "When will you give Leo an Oscar?":
    oscar > 88 ? "Leo got one already!": null
}
console.log(leo(88))