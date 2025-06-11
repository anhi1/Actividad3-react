const BASE_URL = 'https://mock.apidog.com/m1/873119-854329-default';

// Obtener todas las actividades
export const fetchActivities = async () => {
  const res = await fetch(`${BASE_URL}/activities`);
  if (!res.ok) throw new Error('Error al cargar actividades');
  return res.json();
};

