//variables
const EDIT_TABLE = 'app/tables/EDIT_TABLE';
const UPDATE_TABLES = 'app/tables/UPDATE_TABLES';
//selectors
export const getTables = (state) => state.tables;



// action creators

export const editTable = (payload) => ({
  type: EDIT_TABLE,
  payload
})
export const updateTables = (payload) => ({
  type: UPDATE_TABLES,
  payload
})


  export const fetchTables = () => {
    return dispatch => {
      fetch('http://localhost:3131/api/tables')
        .then((res) => res.json())
        .then((tables) => {
          dispatch(updateTables(tables));
        });
    };
  };

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
