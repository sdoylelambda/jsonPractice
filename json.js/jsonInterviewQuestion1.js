const https = require('https')

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  let data = ''
  console.log(resp)
  // parse json data
  // remove all keys with value of N/A or empty strings
  // if one of these values appears in an array, remove that single item
  // console.log modified object as a string

  // console.log(JSON.stringify(resp))
})
