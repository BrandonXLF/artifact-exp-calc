import {
	ARTIFACTS_PER_RUN,
	DOMAIN_RARITIES,
	EXP_AMOUNTS,
	EXP_BASES,
	FODDER_EXP_VALUE,
	LEVEL_MAXES
} from './data';

export function calcFodderExp(exp: number, rarity: Rarity) {
	return EXP_BASES[rarity] + exp * FODDER_EXP_VALUE;
}

export function calculateTotalExp(current: number, mat: number, fodderList: Fodder[]) {
	return (
		current +
		mat +
		fodderList.reduce((prev, [exp, rarity, times]) => prev + calcFodderExp(exp, rarity) * times, 0)
	);
}

export function calcRunsRequired(exp: number, { domainLevel, use }: ResinInfo) {
	let expPerRun = 0;

	for (const rarity of DOMAIN_RARITIES) {
		if (!use[rarity]) continue;
		expPerRun += EXP_BASES[rarity] * ARTIFACTS_PER_RUN[domainLevel][rarity];
	}

	return exp / expPerRun;
}

export function calcLevelAndRemainder(exp: number, rarity: Rarity): [number, number] {
	let start = 0;
	let end: number = EXP_AMOUNTS[rarity].length;

	while (end - start > 1) {
		const currentIndex = Math.floor((start + end) / 2);

		if (EXP_AMOUNTS[rarity][currentIndex] < exp) {
			start = currentIndex;
		} else if (EXP_AMOUNTS[rarity][currentIndex] > exp) {
			end = currentIndex;
		} else {
			return [currentIndex, 0];
		}
	}

	return [start, exp - EXP_AMOUNTS[rarity][start]];
}

export function calcMaxExp(rarity: Rarity) {
	return EXP_AMOUNTS[rarity][LEVEL_MAXES[rarity]]!;
}
