import { BandGateway } from "../gateways/band";
import { BandDatabase } from "../../data/bandDatabase";
import { Band } from "../entities/band";

interface BandDetailsUCInput {
    id: string,
    name: string,
}

interface BandDetailsUCOutput {
    id: string,
    name: string,
    musicGenre: string,
    responsible: string
}

export class GetBandDetailsUC {
    constructor(private bandDB: BandDatabase) {}

    async execute(input: BandDetailsUCInput): Promise<BandDetailsUCOutput> {
        
        let band: Band | any;

        if (!input.name) {
            band = await this.bandDB.getBandByName(input.name)
        } else if (input.id) {
            band = await this.bandDB.getBandById(input.id)
        } else {
            throw new Error("Not found")
        }
        
        return {
            id: band.getId(),
            name: band.getName(),
            musicGenre: band.getMusicGenre(),
            responsible: band.getResponsible()
         };
   
    }
}