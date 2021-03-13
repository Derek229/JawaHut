import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing vertical>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Planets'
          active={activeItem === 'planets'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Droids'
          active={activeItem === 'droids'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
