
export interface Badge {
    city : string;
    time : string;
    temperature : number;   
    day : string; 
    month : string;
    skyIcon : string;
}

export type BadgeComponentProps = {
    badge: Badge 
}

export type AddCityProps = {
    onAddCity : (cityName : string) => void;
}

export interface AddCityModalProps extends AddCityProps{
    isModalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}