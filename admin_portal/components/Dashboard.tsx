import React from 'react';
import { Card, Row, Col, Table, Badge } from 'react-bootstrap';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
  const recentGrievances = [
    { id: 1, category: 'CM Office (Miscellaneous)', description: 'Public transport services are irregular, causing difficulties for daily commuters.', status: 'Open', nature: 'Non-Critical', recommendedSolution: 'Implement real-time tracking systems for timely arrival information.' },
    { id: 2, category: 'Municipal', description: 'Water supply is inconsistent, and the water quality is poor.', status: 'In Progress', nature: 'Non-Critical', recommendedSolution: 'Implement rainwater harvesting systems for consistent, cleaner water access.' },
    { id: 3, category: 'Police', description: 'Theft incidents have increased in residential areas, and police patrolling is inadequate.', status: 'Open', nature: 'Critical', recommendedSolution: 'Increase police presence to deter and apprehend thieves.' },
    { id: 4, category: 'Development Authority', description: 'Issues related to the Waqf Board have emerged, involving encroachments and mismanagement of properties.', status: 'Resolved', nature: 'Non-Critical', recommendedSolution: 'Establish independent regulatory body for oversight and accountability in Waqf Board operations.' },
    { id: 5, category: 'Public Works Department', description: 'Road accidents have increased due to lack of proper traffic signals and potholes on the main road', status: 'In Progress', nature: 'Critical', recommendedSolution: 'Install traffic signals, repair potholes, and enforce traffic regulations.' },

    ];

  const pieData = {
    labels: ['Municipal', 'Police', 'Development Authority', 'Public Works Department', 'CM Office (Miscellaneous)'],
    datasets: [
      {
        data: [83,75,54,61,24],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#f4b619', '#e02d1b']
      }
    ]
  };

  const barData = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Grievances Received',
        data: [65, 59, 89, 61, 23,0],
        backgroundColor: '#4e73df'
      },
      {
        label: 'Grievances Resolved',
        data: [60, 55, 88, 36,15,0],
        backgroundColor: '#1cc88a'
      }
    ]
  };

  return (
    <div className="container-fluid px-4">
      <h1 className="h3 mb-4 mt-4 text-gray-800">Dashboard</h1>
      <Row>
        <Col lg={4} md={6} className="mb-4">
          <Card className="border-left-primary shadow h-100 py-2">
            <Card.Body>
              <Row className="no-gutters align-items-center">
                <Col className="mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Grievances</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">297</div>
                </Col>
                <Col xs="auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="border-left-success shadow h-100 py-2">
            <Card.Body>
              <Row className="no-gutters align-items-center">
                <Col className="mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Resolved Grievances</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">254</div>
                </Col>
                <Col xs="auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="border-left-info shadow h-100 py-2">
            <Card.Body>
              <Row className="no-gutters align-items-center">
                <Col className="mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Open Grievances</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">38</div>
                </Col>
                <Col xs="auto">
                  <i className="fas fa-check-circle fa-2x text-gray-300"></i>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className="mb-4">
          <Card className="shadow">
            <Card.Header className="py-3">
              <h6 className="m-0 font-weight-bold text-primary">Grievances by Category</h6>
            </Card.Header>
            <Card.Body>
              <Pie data={pieData} options={{ maintainAspectRatio: false, responsive: true }} height={200} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8} className="mb-4">
          <Card className="shadow">
            <Card.Header className="py-3">
              <h6 className="m-0 font-weight-bold text-primary">Grievances Trend</h6>
            </Card.Header>
            <Card.Body>
              <Bar 
                data={barData}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }}
                height={300}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="shadow mb-4">
        <Card.Header className="py-3">
          <h6 className="m-0 font-weight-bold text-primary">Recent Grievances</h6>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Description</th>
                <th>Status</th>
                <th>Nature</th>
                <th>Recommended Solution</th>
              </tr>
            </thead>
            <tbody>
              {recentGrievances.map(grievance => (
                <tr key={grievance.id}>
                  <td>{grievance.id}</td>
                  <td>{grievance.category}</td>
                  <td>{grievance.description}</td>
                  <td>
                    <Badge bg={
                      grievance.status === 'Open' ? 'danger' :
                      grievance.status === 'In Progress' ? 'warning' :
                      'success'
                    }>
                      {grievance.status}
                    </Badge>
                  </td>
                  <td>
                    <Badge bg={grievance.nature === 'Critical' ? 'danger' : 'info'}>
                      {grievance.nature}
                    </Badge>
                  </td>
                  <td>{grievance.recommendedSolution}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;

