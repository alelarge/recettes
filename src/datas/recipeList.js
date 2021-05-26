import magretCanard from '../assets/magret-canard.jpeg'
import poissonCriee from '../assets/poisson-criee.jpeg'
import tagliatellesFraiches from '../assets/tagliatelles-fraiches.jpeg' 
import naanPoischiches from '../assets/naan-poischiches.jpeg' 
import grilladeSaucisses from '../assets/grillade-saucisses.jpeg' 
import boeufAubrac from '../assets/boeuf-aubrac.jpeg' 
import burrataCremeuse from '../assets/burrata-cremeuse.jpeg'
import nouillesUdon from '../assets/nouilles-udon.jpeg' 
import SaumonMicuit from '../assets/saumon-mi-cuit.jpeg' 

export const recipeList = [
	{
		name: 'Magret de Canard & Purée aux Olives',
		category: 'classique',
		id: '1ed',
		bestSale: true,
		light: 2,
		water: 3,
		cover: magretCanard,
		price: 15
	},
	{
		name: 'Poisson de la Criée au Crumble d\'Artichaut',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: poissonCriee,
		price: 16
	},

	{
		name: 'Tagliatelles Fraîches, Ricotta & Jambon Sec',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: tagliatellesFraiches,

		price: 9
	},
	{
		name: 'Naan aux Pois Chiches & Citron Confit',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: naanPoischiches,
		price: 20
	},
	{
		name: 'Grillade de Saucisses de Volaille & Légumes Rôtis',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: grilladeSaucisses,
		price: 25
	},

	{
		name: 'Bœuf Aubrac à l\'Italienne',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: boeufAubrac,
		price: 6
	},
	{
		name: 'Burrata Crémeuse de Chèvre & Légumes Rôtis',
		category: 'extérieur',
		id: '7ie',
		bestSale: true,
		light: 2,
		water: 3,
		cover: burrataCremeuse,
		price: 5
	},
	{
		name: 'Nouilles Udon Sautées aux Légumes',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: nouillesUdon,
		price: 8
	},

	{
		name: 'Saumon Mi-cuit & Sauce Cacahuètes',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: SaumonMicuit,
		price: 4
	}
]
