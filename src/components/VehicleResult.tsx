import { Part } from './Part';

export class VehicleResult {
	public available_years: string[] = [];
	public available_makes: string[] = [];
	public available_models: string[] = [];
	public available_styles: string[] = [];
	public parts: Part[] = [];
	public parts_ids: number[] = [];
}

