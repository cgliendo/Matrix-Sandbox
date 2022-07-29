export {};

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Dude",
  id: 0,
};

function getUser(): User {
  return user;
}

function getPerson(): void {}

function getLength(obj: string | string[]) {
  return obj.length;
}

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
