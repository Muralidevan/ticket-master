const custInitialState = []

const customerReducer = (state = custInitialState, action) => {
	switch (action.type) {
		case 'SET_CUSTOMER': {
			//console.log("'SET_CUSTOMER' reducer", action.payload)
			return [].concat(action.payload)
		}
		case 'SET_NEW_CUSTOMER': {
			//console.log("'SET_NEW_CUSTOMER' reducer", action.payload)
			return state.concat(action.payload)
		}
		// case "SET_CUSTOMER_SHOW" : {
		//     console.log("from set show", action.payload)
		//     //return [].concat(action.payload)
		// }
		default: {
			return [].concat(state)
		}
	}
}

export default customerReducer
