//variables
const EDIT_TABLE = 'app/tables/EDIT_TABLE';
const UPDATE_TABLES = 'app/tables/UPDATE_TABLES';
//selectors
export const getTables = (state) => state.tables;
export const getTableById = (state, id) => {
  return state.tables.find((table) => table.id === id);
}


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

export const editTableRequest = ({
  id,
  status,
  bill,
  peopleCurrent,
  peopleMax,
}) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        status,
        peopleCurrent,
        peopleMax,
        bill,
      }),
    };

    fetch(`http://localhost:3131/api/tables/${id}`, options)
      .then(() => dispatch(editTable({ id, status, bill, peopleCurrent, peopleMax })))
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
