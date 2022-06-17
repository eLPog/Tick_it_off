export async function getAllTasks(jwt) {
  const tasks = await fetch('http://localhost:3001/v1/api/tasks', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${jwt}`,
    },
  });
  return await tasks.json();
}
