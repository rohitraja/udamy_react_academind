import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 23.43,
      date: new Date(2021, 4, 21),
    },
    { id: "e1", title: "Groseries", amount: 4.0, date: new Date(2021, 3, 25) },
    { id: "e1", title: "New TV", amount: 43.93, date: new Date(2021, 5, 2) },
    {
      id: "e1",
      title: "Car Insurance",
      amount: 484.04,
      date: new Date(2021, 4, 21),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
