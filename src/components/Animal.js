import './Animal.css';
import PropTypes from 'prop-types';


const Animal = (props) => {

    const toggleBookmark = () => {
        // We want event handler function to do two things:
            // update component's internal state
            // update that information to SSOT
        props.updateBookmark(props.id);
    }

    const altText = `Photo of ${props.name}`;

    let animalStyle = 'Animal';
    if (props.isBookmarked) {
        animalStyle = 'Animal bookmarked';
    }

    const toggleDelete = () => {
        console.log("toggle Delete is called!")
        props.updateDelete(props.id)
    }

    return (
    <section className={animalStyle}>
        <div className='ribbon'></div>
        { props.photo ? <img src={ props.photo } alt={ altText }></img> : "[No Photo]" }
        <h3>Name: { props.name }</h3>
        <p>Species: { props.species }</p>
        <button onClick={toggleBookmark} className="bookmark-button">🌟 Bookmark</button>
        <button onClick={toggleDelete} className="delete-button">🐶 Delete </button>
    </section>);
};

Animal.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string,
    isBookmarked: PropTypes.bool,
    updateBookmark: PropTypes.func,
    updateDelete: PropTypes.func
}

export default Animal;