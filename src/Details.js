import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

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
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
export default Details;