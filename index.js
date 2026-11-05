const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(
        [
            {
                id: 1,
            empoyee_name: "Vishal",
            empoyee_salary: 10000,
            },

        {
            id: 2,
            empoyee_name: "Subodh",
            empoyee_salary: 90000,
        },

          {
            id: 3,
            empoyee_name: "Atul",
            empoyee_salary: 1000000,
        },
        {
            id: 3,
            empoyee_name: "Aditya",
            empoyee_salary: 80000,
        },
    ]
    )
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
