
const Testimony = ({ member }) => {
  return (
    <div>
      <div>
        <div as="h3">{member?.name}</div>
        <p>{member?.comment}</p>
        </div>
      </div>
  );
};

export default Testimony;
