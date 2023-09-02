import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAllowed, redirectPath = "/login", children }) {
  //* si isAllowed est false, on redirige vers la page login sinon on navigue vers la page demandée
  if (!isAllowed) return <Navigate to={redirectPath} replace />; //*
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
