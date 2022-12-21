import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from './counterApi';

const initialState = {
	value: 45,
	status: 'idle'/*,
	orders : [{a: 1, b: 2}],
	... */
};

/* fonction asynchrone de mise à jour du state */
export const incrementAsync = createAsyncThunk(
	'counter/fetchCount',
	async (amount: number) => {
		const response:any = await fetchCount(amount);
		return response.data; //action.payload quand 'fulfilled'
	}
);

/* creation du composant reducer */
export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	/* reducers : fonctions associées à mon state */
	reducers : {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount : (state, action) => {
			state.value += action.payload; 
		},
		/* reducers => stockage/récupération d'infos dans localStorage, ... */
	},
	/* extrareducers servent pour les appels asynchrones (promises) */
	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(incrementAsync.fulfilled, (state, action) => {
				state.status = 'idle';
				state.value += action.payload;
			})
	}
});

// export des fonctions du réduceur
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export de la value du store
export const selectCount = (state:any) => state.counter.value;
//export du reducer
export default counterSlice.reducer;