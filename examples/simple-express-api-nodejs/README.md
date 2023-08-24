# Simple express api project

Simple express api project with random profile generator endpoint.

# Available Scripts

In the project directory, you can run:

## Installation

Install the packages.

```cmd
yarn
```

## Launch

Runs the api.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

```cmd
yarn start
```

## Routes

`/profiles?total=3`

```
http://localhost:8000/profiles?total=3
```

Available route that returns a list of profiles.

```ts
{
  id: string,
  fullName: string,
  firstName: string,
  lastName: string,
  gender: "Male|Female",
  birthday: string,
  age: number,
  avatar: string,
  address: string,
  zip: string,
  state: string,
  phone: string,
  email: string,
  twitter: string,
  ssn: string,
}
```

Example:

```ts
{
  id: "ad287dd3-fe84-5bdc-9a71-23ad76867f3e",
  fullName: "Alexis Glover",
  firstName: "Alexis",
  lastName: "Glover",
  gender: "Female",
  birthday: "Apr 7th, 1971",
  age: 52,
  avatar: "https://api.adorable.io/avatars/200/Alexis-Glover",
  address: "9835 Cherry Rd., Nampa, ID 83651",
  zip: "83651",
  state: "ID",
  phone: "(224) 505-9675",
  email: "nudi@jipa.ky",
  twitter: "@raw",
  ssn: "414-68-3294"
},
```
