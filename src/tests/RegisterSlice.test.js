import { registerReducer, Register } from "../app/slices/RegisterSlice";

describe("RegisterSlice", () => {
  const initialState = {
    username: "",
    password: "",
    email: "",
  };

  it("handle Register actions", () => {
    const user = {
      username: "testUser",
      password: "testPassword",
      email: "test@email.com",
    };

    const newState = registerReducer(initialState, Register(user));
    expect(newState).toEqual(user);
  });
});
