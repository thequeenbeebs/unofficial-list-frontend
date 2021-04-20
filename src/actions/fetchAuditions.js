export function fetchAuditions() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_AUDITIONS'});
        fetch('http://localhost:3000/auditions')
            .then(resp => resp.json())
            .then(auditions => dispatch({ type: 'ADD_AUDITIONS', auditions }))
    }
}