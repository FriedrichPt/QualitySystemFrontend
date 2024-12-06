// place files you want to import through the `$lib` alias in this folder.
export interface InfosProd {
	name: string;
	verkaeufer: string;
	verkaeufe_letzter_monat: number,
	text: string;
}

export type InfosProdWithID = InfosProd & {id: string}