export async function withTimeout(operation, milliseconds = 500) {

  let timer;

  try{

    return await Promise.race([
      operation,
      new Promise((_, reject) => {
        timer = setTimeout(() => {
          reject(new Error(`Redis operation exceeded ${milliseconds}ms`));
        }, milliseconds);
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}
