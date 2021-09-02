
import React from "react";
import axios from "axios";

class NativeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        postId: 1,
        comment: null
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      
    }

  
    mySubmitHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/comments', this.state).then(response => alert(JSON.stringify(response.data)));


    }
    
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }


    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
          <label>
            postId:
            <input
              name="postId"
              type="number"
              value={this.state.postId}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            comment:
            <input
              name="comment"
              type="text"
              value={this.state.comment}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default NativeForm;
