import data from "../data/staff.json";

export default function getData() {
  let usersInfo = [];

  while (usersInfo.length < 6) {
    const user = data[Math.floor(Math.random() * data.length)];
    if (!usersInfo.includes(user)) {
      usersInfo.push(user);
    }
  }

  return usersInfo;
}


