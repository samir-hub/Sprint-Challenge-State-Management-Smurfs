import axios from 'axios';

/* CREATE */
export const POST_ENTRY_START = 'POST_ENTRY_START'
export const POST_ENTRY_SUCCESS = 'POST_ENTRY_SUCCESS'
export const POST_ENTRY_FAIL = 'POST_ENTRY_FAIL'

export const postEntry = (newEntry) => dispatch => {
    dispatch({ type: POST_ENTRY_START })
    axios
        .post("http://localhost:3333/smurfs/", newEntry)
        .then(res => {
            dispatch({ type: POST_ENTRY_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: POST_ENTRY_FAIL, payload: err }))
}

/* READ */
export const FETCH_ENTRY_START = 'FETCH_ENTRY_START'
export const FETCH_ENTRY_SUCCESS = 'FETCH_ENTRY_SUCCESS'
export const FETCH_ENTRY_FAIL = 'FETCH_ENTRY_FAIL'

export const fetchEntry = () => dispatch => {
    dispatch({ type: FETCH_ENTRY_START })
    axios
    .get("http://localhost:3333/smurfs/")
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_ENTRY_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_ENTRY_FAIL, payload: err }))
}

/* UPDATE */
export const PUT_ENTRY_START = 'PUT_ENTRY_START'
export const PUT_ENTRY_SUCCESS = 'PUT_ENTRY_SUCCESS'
export const PUT_ENTRY_FAIL = 'PUT_ENTRY_FAIL'

export const putEntry = (id, updateEntry) => dispatch => {
    dispatch({ type: PUT_ENTRY_START })
    axios
        .put(`/api/parents/food/${id}`, updateEntry )
        .then(res => {
            dispatch({ type: PUT_ENTRY_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: PUT_ENTRY_FAIL, payload: err }))
}

/* DELETE */
export const DELETE_ENTRY_START = 'DELETE_ENTRY_START'
export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS'
export const DELETE_ENTRY_FAIL = 'DELETE_ENTRY_FAIL'

export const deleteEntry = (id) => dispatch => {
    dispatch({ type: DELETE_ENTRY_START })
    axios
        .delete(`/api/parents/food/${id}`)
        .then(res => {
            dispatch({ type: DELETE_ENTRY_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: DELETE_ENTRY_FAIL, payload: err }))
}