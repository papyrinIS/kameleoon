import Result from "./pages/Result";
import Finalize from "./pages/Finalize";
import Dashboard from "./pages/Dashboard";

export const routes = [
    {
        path:'/results/:id',
        component: Result
    },
    {
        path: '/finalize/:id',
        component: Finalize
    },
    {
        path: '*',
        component: Dashboard
    }
]