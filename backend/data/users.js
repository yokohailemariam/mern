import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "Admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "John@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Chris Brown",
    email: "Chris@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
