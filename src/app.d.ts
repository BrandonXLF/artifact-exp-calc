// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type Rarity = 1 | 2 | 3 | 4 | 5;
	type DomainLevel = 1 | 2 | 3 | 4;
	type DomainRarity = 3 | 4 | 5;

	type ResinInfo = {
		domainLevel: DomainLevel;
		use: Record<DomainRarity, boolean>;
	};

	type Fodder = [number, Rarity, number];
}

export {};
