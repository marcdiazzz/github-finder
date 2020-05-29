import React,{Component} from 'react';

class UserItem extends Component {
    render() {
        const {login , avatar_url , html_url} = this.props.user;
        return (
            <div className='card text-center'>
                <div>
                
                <h3>{login}</h3>
                </div>
                <div>
                    <a href={html_url} className='btn btn-dark btn-sm ny-1'>
                        More
                    </a>
                </div>
                
            </div>
        )
    }
}
 
export default UserItem 