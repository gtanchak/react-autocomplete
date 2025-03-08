const ListItem = ({ result }: any) => {
  return (
    <ul>
      {result?.map((item: any) => (
        <li>{item?.title}</li>
      ))}
    </ul>
  );
};

export default ListItem;
