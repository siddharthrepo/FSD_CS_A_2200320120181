const promise = fetch("https://api.github.com/users/siddharthrepo")
promise.then(
  (res) => {
    return res.json()

  }
).then(
  (data) => console.log(data)
).catch(
  (err) => console.log("error: " , err)
)