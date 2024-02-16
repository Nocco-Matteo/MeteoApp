
export const fromKelvinToCelsius = (kelvin: number): number => {
    return parseFloat((kelvin - 273.15).toFixed(1));
}

export const capitalizeFirstLetter = (string : string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}