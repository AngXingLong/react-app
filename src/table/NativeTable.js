import React, { Component } from 'react'
import axios from "axios";
import {Table, Pagination} from 'react-bootstrap';

class NativeTable extends Component {
    
    
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = {
          activePage:1,
          pagenation:[],
          data:[{}]
        }
     
   }

   getData(page){
        axios.get(`http://localhost:5000/comments?_page=${page}&_limit=2`, this.state).then(response => this.setState({data:response.data}) );
        this.state.activePage = page;

        this.state.pagenation = []
       
        let maxPages = 5;

        
        if(page > 1){
            this.state.pagenation.push({label:"<<", pageNo:1})
            this.state.pagenation.push({label:"<", pageNo:page})
        }

        for (let number = page - 2; number <= page + 2; number++) {

            if(number > 0 &&  maxPages >= number){
                this.state.pagenation.push({label:number, pageNo:number})
            }
           
        }

        if(page < maxPages){
            this.state.pagenation.push({label:">", pageNo:page+1})
            this.state.pagenation.push({label:">>", pageNo:maxPages})
        }
        


   }
   
   renderPagination(){
    
        return this.state.pagenation.map((pagenation, index) => {
            const { label, pageNo} = pagenation //destructuring
            return (
                <Pagination.Item key={label} active={label === this.state.active} onClick={(event) => this.getData(pageNo)} >
                    {label}
                </Pagination.Item>
            )
        })
   }

   renderTableData() {
        return this.state.data.map((data, index) => {
            
        const { id, comment, postId} = data //destructuring
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{comment}</td>
                <td>{postId}</td>
            </tr>
        )
        })
    }
    componentDidMount() {
        this.getData(1)
    }


   render() {
  
    return (
         <div>
            <h1>React Dynamic Table</h1>

            <Table striped bordered hover>
                <tr>
                    <th>id</th>
                    <th>comment</th>
                    <th>postid</th>
                </tr>
                {
                    this.renderTableData()
                }
            </Table>
            <div>
                <Pagination> {this.renderPagination()}</Pagination>
            </div>
           
         </div>
      )
   }
}

export default NativeTable //exporting a component make it reusable and this is the beauty of react