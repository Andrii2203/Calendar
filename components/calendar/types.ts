export interface MonthDay {
    day: string;
    date: string;
    today: boolean;
    offer: boolean;
    order: boolean;
    isCurrentMonth: boolean;
}

export interface WeekViewProps {
    from: Date;
    offerDays: string[];
    orderDays: string[];
}