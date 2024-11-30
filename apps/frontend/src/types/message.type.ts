export type Type = "success" | "error";

export interface Message {
  text: string | null;
  type: Type | null;
  showMessage: (text: string, type: Type) => void;
}
