const players = ['sachin', 'virat', 'dhoni', 'yuvi']
const indices = [1, 3]

function arrayExcept(players, indices) {
	const playersnew = players.filter((player) => {
		return indices.includes(players.indexOf(player))
	})
	return playersnew
}

console.log(arrayExcept(players, indices)) // ['sachin','dhoni']
