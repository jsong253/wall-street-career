
async function LoginUser(baseUrl, credentials) {
    const url = baseUrl + getSuggestedQuery;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}
export {LoginUser} 