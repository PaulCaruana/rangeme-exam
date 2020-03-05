import { createGlobalState } from 'react-hooks-global-state';
const initialState = {
    searchTerm: "",
    images: []
};
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;