import { ColorEnum } from "./ColorEnum";

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

//TODO: Add a lot more colors
//Source : https://hexcolor.co/material-design-colors
export const getUniqueColorFromGeneric = (genericColor: ColorEnum): string => {
    //TODO : Enhancement : Maybe add the color names as well, example #7986CB (Moody Blue) 
    //TODO : Figure out how hex values are established and make this even more random, ie generate a color
    //Find a way to make this pick a color from a large selection of colors
    const violets = ['#30009C', '#3700B3', '#5700E9', '#6000EE', '#7F39FB', '#985EFF', '#BB87FD'];
    const darkBlues = ['#7986CB', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593'];
    const lightBlues = ['#64B5F6', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0'];
    const greens = ['#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32'];
    const yellows = ['#FFF176', '#FFEE58', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825'];
    const oranges = ['#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00'];
    const reds = ['#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828'];

    //do the extra calc for the 0 based index out of preference to pick from 1-7
    const randomIndex = getRandomInt(1, 7) - 1;

    let finalColor = `#FFFFFF`;

    switch (genericColor) {
        case ColorEnum.Violet:
            finalColor = violets[randomIndex];
            break;

        case ColorEnum.DarkBlue:
            finalColor = darkBlues[randomIndex];
            break;

        case ColorEnum.LightBlue:
            finalColor = lightBlues[randomIndex];
            break;

        case ColorEnum.Green:
            finalColor = greens[randomIndex];
            break;

        case ColorEnum.Yellow:
            finalColor = yellows[randomIndex];
            break;

        case ColorEnum.Orange:
            finalColor = oranges[randomIndex];
            break;

        case ColorEnum.Red:
            finalColor = reds[randomIndex];
            break;

        default:
            finalColor = '#FFFFFF';
            break;
    }

    return finalColor;
};