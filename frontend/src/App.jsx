import './App.css'
import { gql, useQuery } from "@apollo/client";
const LYCORIS = gql`
  query {
    kawaii {
      name
      gesture
    }
  }
`;

// console.log(LYCORIS);

function Lycoris() {
  const { loading, error, data } = useQuery(LYCORIS);
  //  console.log(data);
  if (loading) return <p>ロード中...</p>;
  if (error) return <p>エラー</p>;

  console.log(data.kawaii);
  return data.kawaii.map(({name, gesture}) => 
    <div key={name}>
      <p>
        {name} : {gesture}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Lycoris />
    </div>
  )
}

export default App
