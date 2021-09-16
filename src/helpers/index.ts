import { colors } from "@types";

export const getRandomNumber = (min: number = 0, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomColor = (): string => {
    const convertedColors = Object.values(colors);
    return convertedColors[getRandomNumber(0, (convertedColors.length - 1))];
};
