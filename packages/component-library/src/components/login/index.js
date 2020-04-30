import React, { Component } from 'react'
import { Box, Card, Button } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { typography } from '../../typography'
import theme from '../../theme'

const { Body } = typography

const collections = new Set()

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    const { onLogin } = this.props
    const { username, password } = this.state
    collections.add(this.handleChange)
    console.log(collections)
    return (
      <Box width={1} height={1 / 2}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }}
        >
          <Box p={2}>
            <Label htmlFor="email">
              <Body lineHeight={0}>Email</Body>
            </Label>
            <Input
              id="username"
              name="email"
              type="email"
              placeholder="jane@example.com"
              onChange={this.handleChange}
              sx={{
                borderRadius: 5,
                borderColor: '#DCDCDC',
              }}
            />
          </Box>
          <Box p={2}>
            <Label htmlFor="Password">
              <Body lineHeight={0}>Password</Body>
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="your password here..."
              onChange={this.handleChange}
              sx={{
                borderRadius: 5,
                borderColor: '#DCDCDC',
              }}
            />
          </Box>
          <Box p={2} width={[1]}>
            <Button
              width={[1]}
              mr={2}
              onClick={() => onLogin(username, password)}
              sx={{ backgroundColor: theme.colors.blues[1] }}
            >
              Login
            </Button>
          </Box>
        </Card>
      </Box>
    )
  }
}
