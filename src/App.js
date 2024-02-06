import {Character} from "./components/Character";

const App = () => {
    const simpsons = [
        {
            id:1,
            name: 'Homer',
            image: 'https://static.tvtropes.org/pmwiki/pub/images/homersimpson.png'
        },
        {
            id:2,
            name: 'March',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'
        },
        {
            id:3,
            name: 'Lisa',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png'
        },
        {
            id:4,
            name: 'Bart',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
        },
        {
            id:5,
            name: 'Maggie',
            image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'
        },

    ]
    const rick_and_morty = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            id: 4,
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            id: 5,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            id: 6,
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        }

    ]
    return (
        <div>
            {/*{simpsons.map(character=> <Character character={character} key={character.id} /> )}*/}
            {rick_and_morty.map(character=> <Character character={character} key={character.id} /> )}
        </div>
    );
};

export {App};