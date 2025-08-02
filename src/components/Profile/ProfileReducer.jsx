import { useReducer } from "react";
const initialState = {
  ChangeEmail: false,
  ChangeInsta: false,
  ChangePhone: false,
  ChangeTel: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "ChangePhone":
      return {
        ...state,
        ChangePhone: true,
        ChangeEmail: false,
        ChangeInsta: false,
        ChangeTel: false,
      };
    case "ChangeEmail":
      return {
        ...state,
        ChangePhone: false,
        ChangeEmail: true,
        ChangeInsta: false,
        ChangeTel: false,
      };
    case "ChangeInsta":
      return {
        ...state,
        ChangePhone: false,
        ChangeEmail: false,
        ChangeInsta: true,
        ChangeTel: false,
      };
    case "ChangeTel":
      return {
        ...state,
        ChangePhone: false,
        ChangeEmail: false,
        ChangeInsta: false,
        ChangeTel: true,
      };
  }
}
export default function ProfileReducer() {
  const [{ ChangeEmail, ChangeInsta, ChangePhone, ChangeTel }, Dispatch] =
    useReducer(reducer, initialState);

  return [{ ChangeEmail, ChangeInsta, ChangePhone, ChangeTel }, Dispatch ];
}
