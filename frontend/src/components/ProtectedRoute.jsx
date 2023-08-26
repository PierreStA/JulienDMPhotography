import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAllowed, redirectPath = "/login", children }) {
  //* si isAllowed est false, on redirige vers la page login
  if (!isAllowed) return <Navigate to={redirectPath} replace />; //*sinon on navigue vers la page demandée
  return children ? children : <Outlet />; //*si children, on affiche children, sinon on affiche outlet
}

export default ProtectedRoute;
