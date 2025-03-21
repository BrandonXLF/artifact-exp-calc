export const FODDER_EXP_VALUE = 0.8;
export const AVERAGE_BONUS = 1.13;

type LevelValues<L extends number, T extends number[] = []> = T extends { length: L }
	? [number, ...T]
	: LevelValues<L, [...T, number]>;

type RarityLevelValues = {
	[K in Rarity]: LevelValues<(typeof LEVEL_MAXES)[K]>;
};

export const EXP_AMOUNTS: RarityLevelValues = {
	5: [
		0, 3000, 6725, 11150, 16300, 22200, 28875, 36375, 44725, 53950, 64075, 75125, 87150, 100175,
		115325, 132925, 153300, 176800, 203850, 234900, 270475
	],
	4: [
		0, 2400, 5375, 8925, 13050, 17775, 23125, 29125, 35800, 43175, 51275, 60125, 69750, 80175,
		92300, 106375, 122675
	],
	3: [0, 1800, 4025, 6675, 9775, 13325, 17325, 21825, 26825, 32350, 38425, 45050, 52275],
	2: [0, 1200, 2700, 4475, 6525],
	1: [0, 600, 1350, 2225, 3250]
};

export const EXP_MAXES: RarityLevelValues = {
	5: [
		3000, 3725, 4425, 5150, 5900, 6675, 7500, 8350, 9225, 10125, 11050, 12025, 13025, 15150, 17600,
		20375, 23500, 27050, 31050, 35575, 0
	],
	4: [
		2400, 2975, 3550, 4125, 4725, 5350, 6000, 6675, 7375, 8100, 8850, 9625, 10425, 12125, 14075,
		16300, 0
	],
	3: [1800, 2225, 2650, 3100, 3550, 4000, 4500, 5000, 5525, 6075, 6625, 7225, 0],
	2: [1200, 1500, 1775, 2050, 0],
	1: [600, 750, 875, 1025, 0]
};

export const EXP_BASES: Record<Rarity, number> = {
	1: 420,
	2: 840,
	3: 1260,
	4: 2520,
	5: 3780
};

export const LEVEL_MAXES = {
	5: 20,
	4: 16,
	3: 12,
	2: 4,
	1: 4
} as const satisfies Record<Rarity, number>;

export const ARTIFACTS_PER_RUN: Record<DomainLevel, Record<DomainRarity, number>> = {
	1: {
		3: 6.39,
		4: 0.71,
		5: 0
	},
	2: {
		3: 5.68,
		4: 1.42,
		5: 0
	},
	3: {
		3: 4.97,
		4: 1.775,
		5: 0.355
	},
	4: {
		3: 3.55,
		4: 2.485,
		5: 1.064
	}
};

export const RESIN_PER_RUN = 20;
export const DOMAIN_RARITIES = [3, 4, 5] as DomainRarity[];
