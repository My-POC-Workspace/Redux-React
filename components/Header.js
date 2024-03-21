import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {name,age,onAdd} ) => {

  const onClick = () => {
    console.log("Click...")
  }

  return (
    <header >
      <p><b>Name: {name}</b></p>
      <p><b>Age: {age}</b></p>
      <Button  bgcolor='green' text='Add' color='white'  onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Manager...'
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Header
