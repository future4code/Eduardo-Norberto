import { BandGateway } from "../gateways/band";
import { v4 } from "uuid"
import { Band } from "../entities/band";

interface CreateBandUCInput {
    name: string,
    musicGenre: string,
    responsible: string
}

interface CreateBandUCOutput {
    message: string
}

export class CreateBandUC {
    constructor(private bandGateway: BandGateway){}

    public async execute(input: CreateBandUCInput): Promise<CreateBandUCOutput> {

        const id = v4();
        const band = new Band(
            id,
            input.name,
            input.musicGenre,
            input.responsible
        );

        await this.bandGateway.createBand(band)

        return {
            message: "The band was successfully included"
        }
    }
}