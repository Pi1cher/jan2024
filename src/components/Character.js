const Character = ({character}) => {
const {name, image, status, species, gender} = character;
    return (
        <div>
            <h1>{name}</h1>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};