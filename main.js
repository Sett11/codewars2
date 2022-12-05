function validateUsr(username) {
    const result = /^[a-z0-9_]{4,16}$/.test(username)
    return result
  }