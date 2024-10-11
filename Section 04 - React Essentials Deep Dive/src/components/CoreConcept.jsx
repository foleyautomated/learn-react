export default function CoreConcept({image, title, description}) { //Example of object destructuring
    return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }
  