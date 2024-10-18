import { create } from 'zustand';
import React from 'react';

const useStore = create((set) => ({
	bears: 0,
	increasePopulation: () => set((state) => ({bears: state.bears + 1})),
	removeAllBears: () => set({bears: 0}),
	updateBears: (newBears) => set({bears: newBears})
}));

const Test = () => {

	const bears = useStore((state) => state.bears);

	const increase = useStore((state) => state.increasePopulation);
	console.log(bears);
		
	return (

		<div>
			<h1>{bears} around here....</h1>
			<button onClick={increase}> one up</button>


		</div>
	)
}
export default Test
