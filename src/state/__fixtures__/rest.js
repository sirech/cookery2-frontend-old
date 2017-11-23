export const recipes = [
  {
    id: 1,
    name: 'test name',
    servings: 2,
    difficulty: 'easy',
    duration: 0
  },
  {
    id: 2,
    name: 'Bell’s Expedition',
    servings: 5,
    difficulty: 'easy',
    duration: 0
  },
  {
    id: 3,
    name: 'Founders Kentucky Breakfast ',
    servings: 2,
    difficulty: 'medium',
    duration: 0
  },
  {
    id: 4,
    name: 'Chimay Grande Réserve',
    servings: 3,
    difficulty: 'medium',
    duration: 0
  },
  {
    id: 5,
    name: 'Alpha King Pale Ale',
    servings: 1,
    difficulty: 'difficult',
    duration: 0
  },
  {
    id: 6,
    name: 'La Fin Du Monde',
    servings: 6,
    difficulty: 'easy',
    duration: 0
  },
  {
    id: 7,
    name: 'Trappistes Rochefort 10',
    servings: 1,
    difficulty: 'difficult',
    duration: 0
  },
  {
    id: 10,
    name: 'Yeti Imperial Stout',
    servings: 2,
    difficulty: 'medium',
    duration: 0
  },
  {
    id: 11,
    name: 'Samuel Smith’s Oatmeal Stout',
    servings: 6,
    difficulty: 'medium',
    duration: 93
  },
  {
    id: 15,
    name: 'my new thing',
    servings: 3,
    difficulty: 'easy',
    duration: 0
  },
  {
    id: 16,
    name: 'name name name',
    servings: 3,
    difficulty: 'medium',
    duration: 0
  }
]

export const recipe = {
  quantities: [
    { name: 'sugar', unit: 'gr', amount: 50 },
    { name: 'water', unit: 'ml', amount: 1000 },
    { name: 'salt', unit: 'pinch', amount: 2 }
  ],
  steps: [
    { isRecipe: false, description: 'Mix all the ingredients' },
    { isRecipe: true, id: 69, name: 'Other' }
  ],
  ...recipes[0]
}
