async function Validate_User(event, user,pass) {

  event.preventDefault();

  const response= await fetch('Database/Login.db'); //SQLie Database is connected here
  const arrayBuffer = await response.arrayBuffer(); //Converted to binary array so it can be read on the browser by sql.js

  const SQL = await initSqlJs();

  const db= new SQL.Database(new Uint8Array(arrayBuffer));

  const query = `Select * from Users where id=? and password=?`;
  const stmt = db.prepare(query);

  stmt.bind([user, pass]);

  if (stmt.step()) {
    console.log("User found");
    window.location.href = "Webpages/Homepage.html";
  } else {
    alert("Invalid username or password");
  }

}