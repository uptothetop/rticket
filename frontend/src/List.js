function List(props) {
  return (
    <ul>
      { props.list.map( el => (<li key={el}>{el}</li>))}
    </ul>
  )
}

export default List;