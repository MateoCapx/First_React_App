import PropTypes from 'prop-types'
// PropTypes used to define the types of data that are expected to be passed to a React component as props. library is used to specify the expected data type of each prop

const Button = ({ color, text, onClick }) => {

    return (
        <button 
            onClick = {onClick}
            style={{ backgroundColor: color }}
            className='btn'>
            {text}
        </button>
    )
}


Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button