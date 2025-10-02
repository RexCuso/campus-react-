import { Navigate } from "react-router-dom";

function PrivateRoute({ children, allowedRoles }) {
    const user = JSON.parse(localStorage.getItem("usuario"));

  /* si no hay usuario identificado, lo tiro al login */
  if (!user) {
    return <Navigate to="/" replace />;
  }

  /* si el usuario por alguna rason no tiene el "tipo" correcto para la pagina, lo tiro al login */
  if (allowedRoles && !allowedRoles.includes(user.tipo)) {
    return <Navigate to="/" replace />;
  }

  /* Si el usruario esta identificado y tiene el tipo correcto no lo tiro al login, lo dejo pasar a la pagina */
  return children;
}

export default PrivateRoute;