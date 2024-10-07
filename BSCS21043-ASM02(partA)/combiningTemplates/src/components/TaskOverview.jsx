
import { CheckCircle, Clock, XCircle } from 'react-feather';

const TaskOverview = () => {
  return (
    <div className="card">
      <h3>Task Overview</h3>
      <ul>
        <li><CheckCircle color="green" /> Completed: 5</li>
        <li><Clock color="orange" /> In Progress: 3</li>
        <li><XCircle color="red" /> Pending: 2</li>
      </ul>
    </div>
  );
};

export default TaskOverview;
