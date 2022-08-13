let usersListArr = [];

// user and write a list item for each
//dummy user
usersListArr.push("Bob");
usersListArr.push("Alice");
usersListArr.push("Charlie");

function requestHandler(req, res) {
  if (req.url === "/") {
    res.write("<h1>Welcome to assignment 1!</h1>");
    res.write(`
        <form action="/create-user" method="POST">
            <input type="text" name="username" placeholder="username">
            <button type="submit">Submit</button>
        </form>
    `);

    res.write('<a href="/users">see users...</a>');

    return res.end();
  }

  if (req.url === "/users") {
    res.write("<h1>Users</h1>");
    res.write("<ul>");
    //loop thorugh the usersListArr
    for (let i = 0; i < usersListArr.length; i++) {
      res.write(`<li>${usersListArr[i]}</li>`);
    }
    res.write("</ul>");
    res.write("<a href='/'>back to home</a>");
    return res.end();
  }

  if (req.url === "/create-user" && req.method === "POST") {
    const usersList = [];

    req
      .on("data", (chunk) => {
        usersList.push(chunk);
      })
      .on("end", () => {
        const parsedBody = Buffer.concat(usersList).toString();
        const username = parsedBody.split("=")[1];
        console.log(`User ${username} is logged`);
        usersListArr.push(username);
        //loop thorugh the usersListArr
        for (let i = 0; i < usersListArr.length; i++) {
          console.log(usersListArr[i]);
        }
      });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
}

module.exports = requestHandler;
