function formatPoem(poem) {
    const p = poem.split`.`.map(el=>el.trim()).join`.\n`
    return p.replace(/\n$/,'')
}
  console.log(formatPoem('Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'))

