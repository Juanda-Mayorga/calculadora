import './App.css'

function App() {
	return (
		<div className='calculator'>
			{/* 2. La pantalla es el primer hijo directo */}
			<div className='display'>0</div>

			{/* 3. TODOS los botones son hijos directos del contenedor .calculator */}
			<button className='btn btn--function'>AC</button>
			<button className='btn btn--function'>+/-</button>
			<button className='btn btn--function'>%</button>
			<button className='btn btn--operator'>÷</button>

			<button className='btn btn--number'>7</button>
			<button className='btn btn--number'>8</button>
			<button className='btn btn--number'>9</button>
			<button className='btn btn--operator'>×</button>

			<button className='btn btn--number'>4</button>
			<button className='btn btn--number'>5</button>
			<button className='btn btn--number'>6</button>
			<button className='btn btn--operator'>-</button>

			<button className='btn btn--number'>1</button>
			<button className='btn btn--number'>2</button>
			<button className='btn btn--number'>3</button>
			<button className='btn btn--operator'>+</button>

			{/* El botón cero tiene una clase extra para ocupar dos columnas */}
			<button className='btn btn--number btn--zero'>0</button>
			<button className='btn btn--number'>.</button>
			<button className='btn btn--operator'>=</button>
		</div>
	)
}

export default App
