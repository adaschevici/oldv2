import React from 'react'
import { Box, Card, Image, Text } from 'rebass'
import { typography } from '../../typography'

const { Artifika, Body } = typography

export default ({ image, title, description }) => (
  <Box width={280}>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}
    >
      <Image src={image} />
      <Box px={2}>
        <Artifika tag="h3">{title}</Artifika>
        <Body fontSize={0}>{description}</Body>
      </Box>
    </Card>
  </Box>
)
