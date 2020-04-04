import { ShowGateway } from "../gateways/show";
import { ShowWeekDay } from "../entities/show";


interface GetShowByDateUCInput {
    weekDay: ShowWeekDay;
}

interface GetShowsByDateUCOutput {
    id: string;
    weekDay: ShowWeekDay;
    startTime: number;
    endTime: number;
    bandId: string;
}

interface GetShowByDateUCOutput {
    shows: GetShowsByDateUCOutput[];
}

export class GetShowByDateUC {
    constructor(private showGateway: ShowGateway) { }

    public async execute(input: GetShowByDateUCInput): Promise<GetShowByDateUCOutput> {
        const show = await this.showGateway.getShowsByDay(input.weekDay)

        if (!show) {
            throw new Error("There is already a show at this time")
        }
        return {
            shows: show.map((ev) => {
                return {
                    id: ev.getId(),
                    weekDay: ev.getWeekDate(),
                    startTime: ev.getStartTime(),
                    endTime: ev.getEndTime(),
                    bandId: ev.getBandId(),
                }
            })
        }
    }
}