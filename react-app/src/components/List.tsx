type Props = {
  data: string[];
};

function List({ data }: Props) {
    const handleClick = (e) =>{
        console.log('click')
    }
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li
          onClick={handleClick}
          key={elemento}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
