export type CharacterState =
  | "idle"
  | "celebrating"
  | "drinking"
  | "dancing"
  | "surprised"
  | "sleeping";

export interface CharacterPosition {
  x: number;
  y: number;
  z: number;
}

export interface Character {
  id: string;
  userId: string;
  username: string;
  position: CharacterPosition;
  type: string;
  state: CharacterState;
}

export interface AssignUser {
  userId: string;
  username: string;
  type?: string;
}
