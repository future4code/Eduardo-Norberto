import { v4 } from "uuid"
import { ShowGateway } from "../gateways/show";
import { Show, ShowWeekDay } from "../entities/show";

interface CreateShowUCInput {
    weekDay: ShowWeekDay,
    startTime: number,
    endTime: number,
    bandId: string
}

interface CreateShowUCOutput {
    message: string
}

export class CreateShowUC {
    constructor(private showGateway: ShowGateway) { }

    public async execute(input: CreateShowUCInput): Promise<CreateShowUCOutput> {

        const timeRange = await this.showGateway.getShowWithBandByTimeRange(input.startTime, input.endTime, input.weekDay);

        if (timeRange) {
            throw new Error("It is not possible to have two shows at the same time.")
        }
        const id = v4();
        const show = new Show(
            id,
            input.weekDay,
            input.startTime,
            input.endTime,
            input.bandId
        );

        await this.showGateway.createShow(show)

        return {
            message: "The Show was successfully included"
        }
    }
}