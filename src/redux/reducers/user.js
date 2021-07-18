let initialState = {
  userList: [
    {
      id: 1,
      fullname: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "123456789",
      type: "VIP",
    },
    {
      id: 2,
      fullname: "Hua Nguyen Tan Khoa",
      username: "tankhoa",
      email: "tankhoa@gmail.com",
      phoneNumber: "987654321",
      type: "USER",
    },
  ],
  keyword: "",
  userEdit: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case value:
    //     break;
    case "DELETE": {
      let userList = [...state.userList];
      let index = userList.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        userList.splice(index, 1);
        state.userList = userList;
      }
      return { ...state };
    }
    case "GET_KEYWORD": {
      state.keyword = action.payload;
      return { ...state };
    }
    case "EDIT": {
      state.userEdit = action.payload;
      return { ...state };
    }
    case "SUBMIT": {
      let userList = [...state.userList];
      if (action.payload.id) {
        let index = userList.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          //UPDATE
          userList[index] = action.payload;
        }
      } else {
        //ADD
        const userClone = { ...action.payload, id: new Date().getTime() };
        userList = [...state.userList, userClone];
      }
      state.userList = userList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default userReducer;
