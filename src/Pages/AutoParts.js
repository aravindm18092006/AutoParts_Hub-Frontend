import { useParams, useOutletContext } from "react-router-dom";

const AutoParts = () => {
  const { resId } = useParams();
  const { data } = useOutletContext();

  const parts = data?.parts || [];
  const item = parts.find((p) => p.id === parseInt(resId));

  if (!item) return <h2>Part not found</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p><b>Brand:</b> {item.brand}</p>
      <p><b>Description:</b> {item.description}</p>
    </div>
  );
};

export default AutoParts;
