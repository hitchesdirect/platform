export class Vehicle {
	public year: number = 0;
	public make: string = '';
	public model: string = '';
	public style: string = '';

	constructor(year: number, make: string, model: string, style: string) {
		this.year = year;
		this.make = make;
		this.model = model;
		this.style = style;
	}

	public toQueryString(): string {
		const params: string[] = [];
		if (this.year !== undefined && this.year !== null && this.year > 0) {
			params.push(`year=${this.year}`);
		}

		if (this.make !== undefined && this.make !== null && this.make !== '') {
			params.push(`make=${this.make}`);
		}

		if (this.model !== undefined && this.model !== null && this.model !== '') {
			params.push(`model=${this.model}`);
		}

		if (this.style !== undefined && this.style !== null && this.style !== '') {
			params.push(`style=${this.style}`);
		}

		return params.join('&');
	}

	public complete(): boolean {
		if (this.year === undefined || this.year === null || this.year === 0) {
			return false;
		}

		if (this.make === undefined || this.make === null || this.make === '') {
			return false;
		}

		if (this.model === undefined || this.model === null || this.model === '') {
			return false;
		}

		if (this.style === undefined || this.style === null || this.style === '') {
			return false;
		}

		return true;
	}
}
