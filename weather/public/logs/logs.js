getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const root = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        const Break = document.createElement('br');



        geo.textContent = `${item.lat}°,${item.long}°`;
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = dateString;
        root.append(name, geo, date, Break);
        document.body.append(root);
    }
}