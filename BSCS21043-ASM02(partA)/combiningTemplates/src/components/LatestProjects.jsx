// src/components/LatestProjects.jsx
import './LatestProject.css'; // Make sure to create this CSS file

const LatestProjects = () => {
  const projects = [
    { name: 'Project Apollo', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Vanessa Tucker' },
    { name: 'Project Fireball', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Cancelled', assignee: 'William Harris' },
    { name: 'Project Hades', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Sharon Lessman' },
    { name: 'Project Nitro', startDate: '01/01/2023', endDate: '31/06/2023', status: 'In progress', assignee: 'Vanessa Tucker' },
    { name: 'Project Phoenix', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'William Harris' },
    { name: 'Project X', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Sharon Lessman' },
    { name: 'Project Romeo', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Christina Mason' },
    { name: 'Project Wombat', startDate: '01/01/2023', endDate: '31/06/2023', status: 'In progress', assignee: 'William Harris' },
  ];

  return (
    <div className="latest-projects-container">
      <h2>Latest Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td className={project.status.toLowerCase().replace(' ', '-')}>{project.status}</td>
              <td>{project.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestProjects;
