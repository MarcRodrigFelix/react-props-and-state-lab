import React from 'react'

class Pet extends React.Component {

   genderReveal = () => {
    if ( this.props.pet.gender === 'female' ){
      return 
     } else if ( this.props.pet.gender === 'male' ){
      return  
     }
  }


  render() {
    // let adoptedButton;

    // if ( this.props.pet.isAdopted === true ) {
    //   adoptedButton = <button className="ui disabled button">Already adopted</button>
    // } else {
    //   adoptedButton = <button className="ui primary button">Adopt pet</button>
    // }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
          { this.props.pet.name }
          { this.props.pet.gender === 'female' ? ' ♀ ' :  ' ♂ ' }
          </a>
          <div className="meta">
            <span className="date">{ this.props.pet.type }</span>
          </div>
          <div className="description">
            <p>Age: { this.props.pet.age }</p>
            <p>Weight: { this.props.pet.weight }</p>
          </div>
        </div>
        <div className="extra content">
          {/* { adoptedButton } */}
          { this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : ( 
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
