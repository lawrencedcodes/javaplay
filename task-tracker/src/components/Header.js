import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () =>{
    console.log('Click')
  }
  return (
    <header class="header">
        <h1>{title}</h1>
        <Button color='green' text='Click' onClick={onClick}/>
    </header>
  )
}

Header.propTyles = {
  title: PropTypes.string.isRequire,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }
  export default Header
