export type CharacterState =
  | "idle"
  | "celebrating"
  | "drinking"
  | "dancing"
  | "surprised"
  | "sleeping";

export type CharacterAnimation =
  | "idle"
  | "drink"
  | "dance"
  | "surprised"
  | "celebrate";

export interface CharacterPosition {
  x: number;
  y: number;
  z: number;
}

export interface CharacterData {
  id: string;
  userId: string;
  username: string;
  position: CharacterPosition;
  type: string;
  state: CharacterState;
}
