

const RecentTransactions = () => {
  const transactions = [
    { id: 'TX1234', amount: '$250', date: 'Oct 1, 2024' },
    { id: 'TX1235', amount: '$150', date: 'Oct 2, 2024' },
    { id: 'TX1236', amount: '$300', date: 'Oct 3, 2024' }
  ];

  return (
    <div className="card">
      <h3>Recent Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.amount}</td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
