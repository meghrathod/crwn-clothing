import React from 'react'
import Sections from './directory.data'
import MenuItem from '../menu-item/menu-items.component'
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections : Sections
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => 
                    <MenuItem key={id} {...otherSectionProps} />
                )}
            </div>
        );
    }
}

export default Directory;