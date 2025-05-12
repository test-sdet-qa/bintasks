
export async function getelText(el) {
    const text = await el.getText();
    return text;
}