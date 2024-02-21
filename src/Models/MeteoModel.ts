
export interface Badge {
    city : string;
    time : string;
    temperature : number;   
    day : string; 
    month : string;
    hourlyPrevision : HourlyPrevision[];
    dailyPrevision : DailyPrevision[]
    skyIcon : string;
}

export interface HourlyPrevision{
    temperature : number;
    time : string;
    skyIcon : string;
}

export interface DailyPrevision{   
    day : string;
    temperature : number;
    skyIcon : string;
}

export type BadgeComponentProps = {
    badge: Badge,
}

export type AddCityProps = {
    onAddCity : (cityName : string) => void;
}

export interface AddCityModalProps extends AddCityProps{
    isModalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

export interface HourlyPrevisionProps{
    data : HourlyPrevision;  
    isFirst : boolean;
}

export interface DailyPrevisionProps{
    data : DailyPrevision;  
}