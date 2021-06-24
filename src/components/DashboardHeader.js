import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter, sortByTitle, sortByDate } from '../actions/filters';

export class DashboardHeader extends React.Component{

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        if(e.target.value === 'title') {
            this.props.sortByTitle();
        } else if(e.target.value === 'date') {
            this.props.sortByDate();
        }
    }
 
    render() {

        return (
            <div className="header-content">
                <div className="filter-container">
                    <input 
                        className="text-input" 
                        placeholder="Search posts"
                        value={this.props.filters.text}
                        onChange={this.onTextChange}
                    />
                    <select 
                        className="select" 
                        value={this.props.filters.sortBy}
                        onChange={this.onSortChange}
                    >
                        <option value="title">By Title</option>
                        <option value="date">By Date</option>
                    </select>
                </div>
                <div className="button-container">
                    <Link className="button" to="/create">Add Post</Link>
                </div>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByTitle: () => dispatch(sortByTitle()),
    sortByDate: () => dispatch(sortByDate())
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);