const url = 'http://localhost:3000/data';

const data = {
    city: "Naples",
    country: "Italy",
    householdSize: 4,
    pets: 1,
    infant: 1,
    child: 0,
    elder: 1,
    disabled: 1,
    ill: 0
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data=> {
        console.log('success', data);
    })
    .catch(error=>{
        console.error('error: ', error);
    }

    );
