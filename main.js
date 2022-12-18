const whosOnline = (friends) => {
  const obj = {};
  friends.map((el) => {
    if (!obj.online) {
      if (el.status === "online" && el.lastActivity <= 10) {
        obj.online = [el.username];
      }
    } else {
      if (el.status === "online" && el.lastActivity <= 10) {
        obj.online.push(el.username);
      }
    }
    if (!obj.offline) {
      if (el.status === "offline") {
        obj.offline = [el.username];
      }
    } else {
      if (el.status === "offline") {
        obj.offline.push(el.username);
      }
    }
    if (!obj.away) {
      if (el.status === "online" && el.lastActivity > 10) {
        obj.away = [el.username];
      }
    } else{
      if (el.status === "online" && el.lastActivity > 10) {
        obj.away.push(el.username)
      }
    }
  });
  return obj;
};

console.log(
  whosOnline([
    {
      username: "David",
      status: "online",
      lastActivity: 10,
    },
    {
      username: "Vasia",
      status: "online",
      lastActivity: 5,
    },
    {
      username: "w",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "d",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
  ])
);
