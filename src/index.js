import './styles/index.scss';

const newObject = {
  test: 1,
  kaka: 2,
  play: 3
}

const otherObject = {
  ...newObject,
  guitar: 22
}

console.log(newObject);

console.log('nice hot reloading', otherObject);
