import React, { Component } from 'react'
import { Menu, Dropdown, Segment } from 'semantic-ui-react'

export default class TopNav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                >
                </Menu.Item>

                <Dropdown item text = "Units">
                <Dropdown.Menu>
                    <Dropdown.Item>Unit List</Dropdown.Item>
                    <Dropdown.Item>Unit Tier List</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text = "Arks">
                    <Dropdown.Menu>
                        <Dropdown.Item>Ark List</Dropdown.Item>
                        <Dropdown.Item>Ark Tier List</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                <Menu.Item
                    name='Guides'
                    active={activeItem === 'guides'}
                    onClick={this.handleItemClick}
                >
                </Menu.Item>
            </Menu>
            </Segment>
        )
    }
}