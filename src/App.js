import ExpenseItem from './components/ExpenseItem';

function App() {
  
  let expense = [
    
    {
      id : 'e1',
      title : "Schoool fee",
      amount : 300,
      date : new Date(2023, 5, 23)
    },
    {
      id : 'e2',
      title : "tution fee",
      amount : 400,
      date : new Date(2023, 5, 23)
    },
    {
      id : 'e3',
      title : "collage fee",
      amount : 890,
      date : new Date(2023, 5, 23)
    },
    {
      id : 'e4',
      title : "university fee",
      amount : 780,
      date : new Date(2023, 5, 23)
    }
  ]

  return (
    <div>
      <h2>let's get started.</h2>
      <ExpenseItem
        // id={expense[0].id}
        date={ expense[0].date }
        title={ expense[0].title }
        amount={ expense[0].amount }
        />
      <ExpenseItem
        // id={expense[1].id}
        date={ expense[1].date }
        title={ expense[1].title }
        amount={ expense[1].amount }
        />
      <ExpenseItem
        // id={expense[2].id}
        date={ expense[2].date }
        title={ expense[2].title }
        amount={ expense[2].amount }
        />
      <ExpenseItem
        // id={expense[3].id}
        date={ expense[3].date }
        title={ expense[3].title }
        amount={ expense[3].amount }
        />
      <ExpenseItem
        // id={expense[3].id}
        date={ expense[4].date }
        title={ expense[4].title }
        amount={ expense[4].amount }
        />
      
    </div>
  );
}

export default App;
