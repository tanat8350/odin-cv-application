export function Card({ title, children }) {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
}

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/[^\w]/g, '');
}

export function Item({ title, value, placeholder, onChange }) {
  const titleToId = camelize(title);
  const valueId = value[titleToId];
  return (
    <div className="input-container">
      <label htmlFor={titleToId}>{title}</label>
      <input
        type="text"
        name={titleToId}
        id={titleToId}
        value={valueId}
        placeholder={placeholder}
        onChange={onChange}
        // onChange={(e) => console.log(e)}
      />
    </div>
  );
}
