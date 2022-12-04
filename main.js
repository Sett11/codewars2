function sayHello( name, city, state ) {
    let str = name.join(' ')
    return `Hello, ${str}! Welcome to ${city}, ${state}!`
  }
  console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))