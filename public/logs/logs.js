getData();
        async function getData() {
            const response = await fetch('/api');
            const data = await response.json();

            for (item of data) {
                const root = document.createElement('div');
                const name = document.createElement('div');
                const geo = document.createElement('div');
                const date = document.createElement('div');
                const image = document.createElement('img');
                const Break =document.createElement('br');



                name.textContent = `name: ${item.name}`;
                geo.textContent = `${item.lat}°,${item.long}°`;
                const dateString = new Date(item.timestamp).toLocaleString();
                date.textContent = dateString;
                image.src = item.image64;
                root.append(name, geo, date,image,Break);
                document.body.append(root);
            }
        }