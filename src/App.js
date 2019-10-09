import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Students from './components/student/Students';
import StudentEdit from './components/student/StudentEdit';
import StudentDelete from './components/student/StudentDelete';
import StudentAdd from './components/student/StudentAdd';
import './App.css';
import 'react-table/react-table.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    students: []
  };

  handleRemove = i => {
    this.setState(state => ({
      students: state.students.filter((row, j) => j !== i)
    }));
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      students: state.students.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      )
    }));
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/students/all')
      .then(res => this.setState({ students: res.data }));
  }

  render() {
    return (
      <div
        className='App'
        style={{ marginLeft: '15px', marginRight: '15px', marginTop: '15px' }}
      >
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <Students
                    student={this.state.students}
                    handleRemove={this.handleRemove}
                    handleChange={this.handleChange}
                  />
                </React.Fragment>
              )}
            />
            <Route exact path='/add' component={StudentAdd} />
            <Route exact path='/edit' component={StudentEdit} />
            <Route exact path='/delete' component={StudentDelete} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
