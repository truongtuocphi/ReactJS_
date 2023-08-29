import "./App.css";
import { useState } from "react";

const course = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "Angular",
  },
];

function App() {
  const [name, setName] = useState([]);
  // console.log(name);
  const handleCheck = (id) => {
    setName((prev) => {
      // console.log(`prev: ${prev}`);
      const isCheck = name.includes(id);
      if (isCheck) {
        return name.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    console.log({ id: name });
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      {course.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={name.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <h1>Hello guys</h1>
    </div>
  );
}

export default App;
