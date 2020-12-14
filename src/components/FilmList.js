import Film from "./Film";

const FilmList = ({ films }) => {

    // we've got an array of objects
    // we want array of JSX
    // we want a map
    const filmNodes = films.map((film) => {
        return (
            <Film name={film.name} url={film.url}/>
        )
    })
    return (<>
        {filmNodes}
    </>)
}

export default FilmList;