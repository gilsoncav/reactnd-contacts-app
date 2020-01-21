import React from 'react'
import PropTypes from 'prop-types'

class ListContacts extends React.Component {

    state = {
        query: ''
    };

    static propTypes = {
        onDeleteContact: PropTypes.func.isRequired,
        contacts: PropTypes.array.isRequired
    };

    userChangedQuery(query) {
        this.setState(() => ({
            query: query.trim()
        }))
    }


    render() {
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        value={this.state.query}
                        onChange={event => this.userChangedQuery(event.target.value)}
                    />
                </div>
                {JSON.stringify(this.state)}
                <div className='list-panel'>
                    <ol className='list'>{
                        this.props.contacts.map(contact => (
                            <li key={contact.id} className='contact-list-item'>
                                <div className='contact-avatar'
                                     style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
                                <div className='contact-details'>
                                    <p>{contact.name}</p>
                                    <p>{contact.handle}</p>
                                </div>
                                <button className='contact-remove'
                                        onClick={() => this.props.onDeleteContact(contact)}>Remove
                                </button>
                            </li>
                        ))
                    }</ol>
                </div>
            </div>
        )
    }
}


export default ListContacts