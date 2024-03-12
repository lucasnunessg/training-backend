const express = require('express');

const app = express();

app.use(express.json());

const teams = [{
    id: 1,
    name: 'Grêmio FBPA',
    initials: 'GFBPA',
},
{
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
},
]

app.get('/', (req, res) => res.status(200).json({message: 'Olá mundo!'}))
app.get('/teams', (req, res) => res.status(200).json({ teams }));
app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
      res.status(201).json({ team: newTeam });
  });
app.get('/teams/:id', (req, res) => {
    const { id } = req.params;
    const team = teams.find((team) => team.id === Number(id));

    if (!team) {
        res.status(404).json({ message: 'Time não encontrado!' })
    }
 return res.status(200).json({ team })
})
  app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    const updateTeam = teams.find((team) => team.id === Number(id));


    if (!updateTeam) {
        return res.status(404).json({message: 'Time não encontrado!'});

    }
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam })
  })

module.exports = app;