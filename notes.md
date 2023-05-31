# errors when CORS are not set up on the aws rest api end point: Access to fetch at 'https://rtkuir7kpi.execute-api.us-east-1.amazonaws.com/prod/registrations' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

# after adding the OPTIONS method and tried again:
  Access to fetch at 'https://aaiiuxs4r8.execute-api.us-east-1.amazonaws.com/prod/registrations' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

# resolve the cors issue with axios await for the request to complete:
async function LoginUser({email, password}) {               // destructuring the passin object
    const awsLoginUrl = `https://aaiiuxs4r8.execute-api.us-east-1.amazonaws.com/prod/registrations?email=${email}&password=${password}`
    //console.log(`credentials: ${JSON.stringify(credentials, null, 4)}`)
    console.log(`email: ${email}`)
    console.log(`password: ${password}`)
    const options = {
        method:'POST',
        url:awsLoginUrl,
        data:JSON.stringify({email, password}),
        // headers:{Authorization:`Bearer ${token}`}
    }

    try{
        await axios.request(options)                            // must use await to have the request completed otherwise you get cors missing origin error
        console.log(`success to call aws log in`)
    } catch (e)  {
        console.log(`failed to call aws log in with error: ${e}`)
    }
}

  
