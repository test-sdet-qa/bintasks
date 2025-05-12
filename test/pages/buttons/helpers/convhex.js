import Color from "color";


export async function convToHex (el) {
    const color = await el.getCSSProperty('background-color')
    const hex = Color(color.value).hex();
    return hex.toLowerCase();
}