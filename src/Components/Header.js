import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
	const bill = () => {
		return console.log('kill me')
	}


	return (
		<div className="header">
			<h1>Task Tracker</h1>
			<Button 
				color={showAdd ? 'red' : 'green'} 
				text={showAdd ? 'Close' : 'Open'} 
				onAdd={onAdd}
			/> 
		</div>
	)
}

export default Header 