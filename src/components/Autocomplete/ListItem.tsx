const ListItem = ({ result }: any) => {
  return (
    <ul>
      {result?.map((item: any) => (
        <li>{item?.label}</li>
      ))}
    </ul>
  );
};

export default ListItem;
