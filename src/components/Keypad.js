// Code Keypad Component Here

const Keypad = () => {
    return (
        <input type="password" onChange={ (event) => {
            console.log('Entering password...')
        }}/>
    )
}

export default Keypad