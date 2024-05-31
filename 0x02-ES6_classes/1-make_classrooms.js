import ClassRoom from './0-classroom';

export default function initialize() {
  return [19, 20, 34].map((number) => new ClassRoom(number));
}
