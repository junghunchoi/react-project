import React, { Component } from 'react';
import BoardService from '../../service/BoardService';
import 'bootstrap/dist/css/bootstrap.min.css';



class ListBoardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            boards: []
        }
		
    }
    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data});
        });
    }

    render() {
        return (
            
            <div>
                <h2 className="text-center">Boards List</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.no}>
                                        <td> {board.id} </td>
                                        <td> {board.title} </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default ListBoardComponent;