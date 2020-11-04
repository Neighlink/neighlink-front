export interface Poll {
    id: number;
    title: string;
    description: string;
    status: boolean;
    startDate: string;
    endDate: string;
    numberOfVotes: number;
}