async function handler (event, context) {
  console.log(JSON.stringify(event, null, 2))
  const body = {
    key: 'value',
    offKey: 'singing',
    singing: 'in-the-rain',
    intendedly: 'unintentional'
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify(body)
  }
  return response
}

module.exports = {handler}
