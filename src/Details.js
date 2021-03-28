import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';

class Details extends React.Component {
    // props is data coming from the parent component
    // this.state is local to this component and immutable from outside
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         loading: true
    //     }
    // }
    state = { loading: true }

    // Handy for AJAX requests etc.
    componentDidMount() {
        // pick up param from 
        pet.animal(this.props.id)
            .then(( { animal }) => {  // Note that you must use arrow functions, otherwise "this" will be wrong
                // Note that this is a shallow merge - affects only top level
                this.setState({
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city} - ${animal.contact.address.state}`,
                    media: animal.photos,
                    description: animal.description,
                    breed: animal.breeds.primary,
                    loading: false
                })
            }, console.error)
    }

    render() {
        if (this.state.loading) {
            return (<h1>Loading...</h1>)
        }
        const { animal, breed, location, description, name, media } = this.state;

        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} ${breed} - ${location}`}</h2>

                    {/* Using contexts is somewhat harder with classes.
                        You must use the context within a Consumer, and since the
                        context provides both the theme and the setTheme, you need
                        to pick the right thing from the array
                    */}
                    <ThemeContext.Consumer>
                        { (themeHook) => (
                            <button style={{ backgroundColor: themeHook[0]}}>Adopt {name}</button>
                        )}

                    </ThemeContext.Consumer>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

// Details uses the API so there's a chance for error.
// Because of this, let's instead of exporting details, 
// wrap it in a higher order component

// export default Details;
export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
}