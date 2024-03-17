const buildSandwitch = (ingredient) => {
    return (ingredient1) => {
        return (ingredient2) => {
            return `${ingredient}, ${ingredient1}, ${ingredient2}`;
        }
    }
}

const mySandwitch = buildSandwitch('bacon')('lettuce')('tomato');
console.log(mySandwitch)

const buildSammy = ingred1 => ingred2 => ingred3 => `${ingred1}, ${ingred2}, ${ingred3}`;
console.log(buildSammy('naco')('briliant')('taco'))

const multiply = (x, y) => x * y;
const curriedMultiply = x => y => x * y;

console.log(multiply(1, 3));
console.log(multiply(2));
console.log(curriedMultiply(1));
console.log(curriedMultiply(2)(3));

const timesTens = curriedMultiply(10);

console.log(timesTens(2));

const time = multiply(1);
console.log(time(2))