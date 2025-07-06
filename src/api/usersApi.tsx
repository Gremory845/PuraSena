export async function fetchUsers() {
  const response = await fetch("http://psbackend.test/api/users");
  if (!response.ok) throw new Error("Error al obtener usuarios");
  return response.json();
}