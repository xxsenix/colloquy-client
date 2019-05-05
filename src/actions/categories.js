export const CHANGE_COLOR = 'CHANGE_COLOR';
export const changeColor = bgColor => ({
    type: CHANGE_COLOR,
    bgColor
});

export const CURRENTLY_SELECTED = 'CURRENTLY_SELECTED';
export const currentlySelected = selected => ({
    type: CURRENTLY_SELECTED,
    selected
});