# Axios Tutorial

#### Docs

[Axios Docs](https://axios-http.com/docs/intro)

#### Install

```sh
npm install axios
```

```js
<script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>
```

#### First Request

- import axios

- axios.get(url)
- axios.post(url)
- axios.patch/put(url)
- axios.delete(url)

- default get axios(url)

- returns a promise
- response data located in data property
- error in error.response

> General format to make api calls

```js
import axios from 'axios';

const fetchData = async () => {
  try {
    // axios.get(), axios.post(),axios.put(), axios.delete()
    const response = await axios(url);

    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};
```

#### Headers

HTTP headers in an API request are used to provide information about the request or the response, or about the object sent in the message body. Headers are a key part of HTTP requests and responses, but they are not directly visible to users. They are used by the client, the server, and proxies to adjust the behavior of the request or response.

In the context of the code below, the `headers` object is being used to set the `Accept` header of the HTTP request. This header is used to tell the server what content types the client can handle. In this case, it's set to `'application/json'`, indicating that the client expects the server to send a response in JSON format.

To make api request with headers in axios we use the below format. 

- second argument in request without data
- axios.get(url,{})

- third argument in requests with data
- axios.post(url,{data},{})

```js
const fetchDadJoke = async () => {
  try {
    const { data } = await axios(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    // console.log(data);
    setJoke(data.joke);
  } catch (error) {
    console.log(error.response);
  }
};
```

There are many other headers that can be used in HTTP requests. Some common ones include:

- `Content-Type`: Specifies the media type of the body of the request (used with POST and PUT requests).
- `Authorization`: Contains the credentials to authenticate a user agent with a server.
- `User-Agent`: Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor, or software version of the requesting software user agent.
- `Cache-Control`: Directives for caching mechanisms in both requests and responses.

Remember, the exact headers and their values you would use depend on the requirements of the server and the specifics of the API you're working with.

#### Post Request

- send data to the server
- axios.post(url, { data })
- more options (auth header) - axios.post(url, { data },{})

```js
try {
  const resp = await axios.post(url, { data });
} catch (error) {
  console.log(error.response.data);
}
```

#### Global Defaults

In Axios, global defaults are configurations that are applied to every request made by the Axios instance. They allow you to set default behavior for various aspects of your requests, such as headers, base URL, timeout, etc. Once set, these defaults will be applied to every request, unless they are overridden in the individual request configuration.

In the provided code below , several global defaults are being set:

1. `axios.defaults.headers['Accept'] = 'application/json';` - This sets the default `Accept` header to `'application/json'`. This tells the server that the client expects JSON in the response.

2. `axios.defaults.baseURL = 'https://api.example.com';` - This sets the default base URL for all requests to `'https://api.example.com'`. Any relative URLs in requests will be prepended with this base URL.

3. `axios.defaults.headers['Authorization'] = AUTH_TOKEN;` - This sets the default `Authorization` header to `AUTH_TOKEN`. This is typically used for API authentication.

4. `axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';` - This sets the default `Content-Type` header for POST requests to `'application/x-www-form-urlencoded'`. This tells the server that the body of the request is formatted as a URL-encoded string.

By setting these global defaults, you can ensure that all your Axios requests behave in a consistent manner, without having to specify these settings in every individual request.

```js
// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

axios.defaults.baseURL = 'https://api.example.com';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

- Setup code inside App.js

```javascript
import Title from './components/Title';
import Setup from './examples/4-global-instance';
import "./axios/global"
function App() {
  return (
    <main>
      <Title/> 
      <Setup/>
    </main>
  );
}

export default App;
```
## Another way of using redefined axios


The `axios.create()` method is used to create a new instance of Axios with custom default settings. This is useful when you want to have different default settings for different parts of your application, or when you want to interact with different APIs that have different requirements.

In this case, the custom instance has two default settings:

1. `baseURL: 'https://course-api.com'` - This sets the base URL for all requests made using `authFetch` to `'https://course-api.com'`. Any relative URLs in requests will be prepended with this base URL. For example, `authFetch.get('/courses')` would request `https://course-api.com/courses`.

2. `headers: { Accept: 'application/json' }` - This sets the default `Accept` header to `'application/json'`. This tells the server that the client expects JSON in the response.

By using `axios.create()`, you can create multiple Axios instances, each with their own default settings. This can make your code more modular and easier to manage, especially in larger applications that interact with multiple APIs.

#### Custom Instance

```js
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json',
  },
});
```


#### Interceptors

- global and custom

```js
authFetch.interceptors.request.use(
  (request) => {
    // request.headers.common['Accept'] = `application/json`;
    request.headers['Accept'] = `application/json`;

    console.log('request sent');
    // must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);
```

##### Update

In the latest version there is no common property

```js
// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Authorization'] = AUTH_TOKEN;
```

```js
// request.headers.common['Accept'] = `application/json`;
request.headers['Accept'] = `application/json`;
```
