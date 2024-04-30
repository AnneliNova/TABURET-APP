import { Action, Reducer } from "redux";

export interface Chair {
    id: number;
    title: string;
    popularity: number;
    overview: string;
}

interface ChairState {
    top: Chair[]
}

const initialState: ChairState = {
    top: [
        { id: 1, title: "Lula Chair", popularity: 98, overview: "Lorem..." },
        { id: 2, title: "Lula Soft Chair", popularity: 97, overview: "Lorem..." },
        { id: 3, title: "Logan Chair", popularity: 96.5, overview: "Lorem..." },
        { id: 4, title: "Benet Chair", popularity: 96, overview: "Lorem..." },
        { id: 5, title: "Guru Chair", popularity: 94, overview: "Lorem..." }
    ]
}

const chairReducer: Reducer<ChairState, Action> = (state, action) => {
    return initialState;
}
  
export default chairReducer;