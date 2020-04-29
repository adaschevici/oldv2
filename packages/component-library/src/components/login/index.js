import React, { useState } from 'react'
import { Box, Card, Button } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { typography } from '../../typography'
import theme from '../../theme'

const { Body } = typography

export default ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Box width={280}>
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
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            onChange={evt => setUsername(evt.target.value)}
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
            onChange={evt => setPassword(evt.target.value)}
            placeholder="your password here..."
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
