import { Schema, model } from "mongoose";

export interface Pokemon {
	name: string;
	avatar: string;
	items: string[];
}

export interface IDetailledStatistic {
	playerId: string;
	elo: number;
	time: number;
	name: string;
	rank: number;
	avatar: string;
	pokemons: Pokemon[];
}

const pokemon = new Schema({
	name: {
		type: String,
	},
	avatar: {
		type: String,
	},
	items: [
		{
			type: String,
		},
	],
});

const statisticSchema = new Schema({
	playerId: {
		type: String,
	},
	elo: {
		type: Number,
	},
	time: {
		type: Number,
	},
	name: {
		type: String,
	},
	rank: {
		type: Number,
	},
	avatar: {
		type: String,
	},
	pokemons: [pokemon],
});

export default model<IDetailledStatistic>(
	"DetailledStatisticV2",
	statisticSchema,
);
