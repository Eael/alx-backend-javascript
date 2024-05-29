export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by zero');
    } else { 
      return numerator / denominator; 
    }
  } catch (error) {
    console.error(error.message);
  }
}
