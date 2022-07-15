import { Flex, Box } from 'theme-ui'
import { Link } from '@carbonplan/components'
import { alpha } from '@theme-ui/color'

const Card = ({ name, language, color, href, children }) => {
  return (
    <Link
      href={href}
      sx={{
        textDecoration: 'none',
        '&:hover': {
          color: 'primary',
        },
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'pointer',
          borderColor: 'primary',
          borderWidth: '1px',
          borderStyle: 'solid',
          padding: [3],
          mt: [2],
          mb: [4],
          pb: [4],
          minHeight: '181px',
          transition: 'background-color 0.15s',
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': {
              bg: alpha('primary', 0.05),
            },
          },
        }}
      >
        <Box>
          <Box
            sx={{
              fontSize: [4],
              fontFamily: 'mono',
            }}
          >
            {name}
          </Box>
          <Box
            sx={{
              fontSize: [2],
              my: [2],
              lineHeight: '1.1em',
            }}
          >
            {children}
          </Box>
        </Box>
        <Box
          sx={{
            mt: [3],
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              width: '16px',
              height: '16px',
              backgroundColor: color,
              borderRadius: '8px',
              verticalAlign: 'bottom',
            }}
          ></Box>
          <Box
            sx={{
              fontSize: [2],
              fontFamily: 'faux',
              display: 'inline-block',
              verticalAlign: 'Box-top',
              ml: ['12px'],
            }}
          >
            {language}
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}

export default Card
